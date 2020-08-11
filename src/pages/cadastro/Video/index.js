import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import getUrl from '../../../util/Url';
import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    url: '',
    descricao: '',
    categoriaId: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  function postVideo() {
    values.categoriaId = parseInt(values.categoriaId, 10);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    fetch(getUrl('/videos'), requestOptions)
      .then((response) => response.json())
      .then(() => {
        clearForm(valoresIniciais);
      });
  }

  function handleFormSubmit(info) {
    info.preventDefault();
    postVideo();
    history.push('/');
  }

  useEffect(() => {
    fetch(getUrl('/categorias'))
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        const categoriasServidor = [{
          id: '',
          value: '',
        }];
        resposta.map((categoria) => categoriasServidor.push({
          id: categoria.id,
          value: categoria.titulo,
        }));

        setCategorias(categoriasServidor);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Vídeo
      </h1>

      <form onSubmit={handleFormSubmit}>
        <FormField
          label="Título:"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL:"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          type="combobox"
          name="categoriaId"
          value={values.categoriaId}
          options={categorias}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastro de categoria
      </Link>

      <br />

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
