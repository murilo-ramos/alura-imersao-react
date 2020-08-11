import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    link: '',
    cor: '#000',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  function postCategoria() {
    categoriasRepository.add(values)
      .then((data) => {
        const novaCategoria = {
          ...values,
          id: data.id,
        };

        setCategorias([
          ...categorias,
          novaCategoria,
        ]);

        clearForm(valoresIniciais);
      });
  }

  function handleFormSubmit(info) {
    info.preventDefault();
    postCategoria();
  }

  useEffect(() => {
    categoriasRepository.getAll()
      .then((todasCategorias) => {
        setCategorias([
          ...todasCategorias,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
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
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Link:"
          type="text"
          name="link"
          value={values.link}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
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
          <li key={`${itemCategoria.titulo}${itemCategoria.id}`}>
            {itemCategoria.titulo}
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
