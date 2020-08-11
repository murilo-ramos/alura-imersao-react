import getUrl from '../util/Url/index';

function getAll() {
  return fetch(getUrl('/videos'))
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível obter dados.');
    });
}

function add(video) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(video),
  };

  return fetch(getUrl('/videos'), requestOptions)
    .then(async (response) => response.json());
}

export default {
  getAll,
  add,
};
