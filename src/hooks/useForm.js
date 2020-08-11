import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(campo, valor) {
    // categoria[campo] = valor; NAO FUNCIONA
    // setCategoria(categoria);

    // provavelmente precisa ser objeto novo
    setValues({
      ...values,
      [campo]: valor,
    });
  }

  function handleChange(info) {
    // da pra desestruturar o objeto, mas nao vou fazer isso
    setValue(info.target.getAttribute('name'), info.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
