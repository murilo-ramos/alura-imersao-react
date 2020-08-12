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

function randomizeVideo(flixData) {
  const categoriaId = getRandomInt(0, flixData.length - 1);
  const videoId = getRandomInt(0, flixData[categoriaId].videos.length - 1);

  const video = flixData[categoriaId].videos[videoId];

  return video;
}

export const LoadingMainContainer = styled(BannerMainContainer)`
  background-size: 25px;  
  background-repeat: no-repeat;
`;

function Home() {
  const [flixData, setFlixData] = useState([]);
  const [mainVideo, setMainVideo] = useState();

  function setMainContainerVideo(video) {
    setMainVideo(video);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setMainVideo(randomizeVideo(categoriasComVideos));
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
          <div key="banner_main">
            <BannerMain
              videoTitle={mainVideo.titulo}
              url={mainVideo.url}
              videoDescription={mainVideo.descricao}
            />
          </div>
        )
      }

      {flixData.map((categoria) => (
        <Carousel
          key={categoria.id}
          category={categoria}
          videoClickHandler={setMainContainerVideo}
        />
      ))}

      <Footer />

    </PageWrapper>
  );
}

export default Home;
