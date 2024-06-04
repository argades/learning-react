import { useState } from "react";

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const onChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if ( inputValue.trim().length <=1 ) return;

    setCategories(categories => [inputValue, ...categories]);

    setInputValue('');
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input id="inputCategoria"
          type="text"
          placeholder="Categoría a buscar..." 
          value={ inputValue }
          onChange={ onChange }/>
      </form>
    </>
  )
}