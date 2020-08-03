import React from 'react';
import { PageWrapper } from '../../components/PageDefault/style.js'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosIniciais from '../../data/dados_iniciais.json'
import Menu from '../../components/Menu/index.js';
import Footer from '../../components/Footer/index.js';


function App() {
  return (
    <PageWrapper>

      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={dadosIniciais.categorias[0].videos[0].descricao_do_video}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Footer/>

    </PageWrapper>
  );
}

export default App;
