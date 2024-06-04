import { useState } from "react";

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Thunder');

  const onChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={ (event) => onSubmit(event) }>
        <input id="inputCategoria"
          type="text"
          placeholder="Categoría a buscar..." 
          value={ inputValue }
          onChange={ (event) => onChange(event) }/>
      </form>
    </>
  )
}