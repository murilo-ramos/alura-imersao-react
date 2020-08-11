import getUrl from '../util/Url/index';

function getCategorias(url) {
  return fetch(getUrl(url))
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível obter dados.');
    });
}

function getAll() {
  return getCategorias('/categorias');
}

function getAllWithVideos() {
  return getCategorias('/categorias?_embed=videos');
}

function add(categoria) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoria),
  };

  return fetch(getUrl('/categorias'), requestOptions)
    .then(async (response) => response.json());
}

export default {
  getAll,
  getAllWithVideos,
  add,
};
