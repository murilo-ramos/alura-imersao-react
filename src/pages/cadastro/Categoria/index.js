import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };

  const [categoria, setCategoria] = useState(valoresIniciais);

  function handleFormSubmit(info) {
    info.preventDefault();

    setCategorias([
      ...categorias,
      categoria,
    ]);

    setCategoria(valoresIniciais);
  }

  function setCampoCategoria(campo, valor) {
    // categoria[campo] = valor; NAO FUNCIONA
    // setCategoria(categoria);

    // provavelmente precisa ser objeto novo
    setCategoria({
      ...categoria,
      [campo]: valor,
    });
  }

  function handleInputChange(info) {
    // da pra desestruturar o objeto, mas nao vou fazer isso
    setCampoCategoria(info.target.getAttribute('name'), info.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form onSubmit={handleFormSubmit}>
        <FormField
          label="Nome:"
          type="text"
          name="nome"
          value={categoria.nome}
          onChange={handleInputChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={categoria.descricao}
          onChange={handleInputChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={categoria.cor}
          onChange={handleInputChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((itemCategoria) => (
          <li key={`${itemCategoria.nome}${itemCategoria.id}`}>
            {itemCategoria.nome}
            {' '}
            -
            {itemCategoria.descricao}
            {' '}
            -
            {itemCategoria.cor}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
