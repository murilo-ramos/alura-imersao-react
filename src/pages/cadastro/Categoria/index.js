import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000'
    };

    const [categoria, setCategoria] = useState(valoresIniciais);

    function handleFormSubmit(info) {
        info.preventDefault();
                    
        setCategorias([
            ...categorias,
            categoria
        ]);

        setCategoria(valoresIniciais);
    };

    function setCampoCategoria(campo, valor) {
        //categoria[campo] = valor; NAO FUNCIONA
        //setCategoria(categoria);

        //provavelmente precisa ser objeto novo
        setCategoria({
            ...categoria,
            [campo]: valor,
        });
    };

    function handleInputChange(info) {
        // da pra desestruturar o objeto, mas nao vou fazer isso
        setCampoCategoria(info.target.getAttribute('name'), info.target.value);

    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {categoria.nome}</h1>

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

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria.nome}${index}`}>
                            {categoria.nome} - {categoria.descricao} - {categoria.cor}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;