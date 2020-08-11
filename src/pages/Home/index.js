import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../components/PageDefault/style';
import LoadingImage from '../../assets/img/loading.gif';
import BannerMain from '../../components/BannerMain';
import { BannerMainContainer } from '../../components/BannerMain/styles';
import Carousel from '../../components/Carousel';
// import dadosIniciais from '../../data/dados_iniciais.json';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
import categoriasRepository from '../../repositories/categorias';

function getRandomInt(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function buildMainBanner(flixData) {
  const categoriaId = getRandomInt(0, flixData.length - 1);
  const videoId = getRandomInt(0, flixData[categoriaId].videos.length - 1);

  const video = flixData[categoriaId].videos[videoId];

  return (
    <div key="banner_main">
      <BannerMain
        videoTitle={video.titulo}
        url={video.url}
        videoDescription={video.descricao_do_video}
      />
    </div>
  );
}

export const LoadingMainContainer = styled(BannerMainContainer)`
  background-size: 25px;  
  background-repeat: no-repeat;
`;

function Home() {
  const [flixData, setFlixData] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setFlixData(categoriasComVideos);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  return (
    <PageWrapper>

      <Menu />

      {
      flixData.length === 0
        ? (
          <div>
            <LoadingMainContainer backgroundImage={LoadingImage} alt="Loading..." />
          </div>
        )
        : (
          buildMainBanner(flixData)
        )
      }

      {flixData.map((categoria) => (
        <Carousel
          key={categoria.id}
          category={categoria}
        />
      ))}

      <Footer />

    </PageWrapper>
  );
}

export default Home;
