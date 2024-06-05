import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newInpVal = inputValue.trim();
    if ( newInpVal.length <=1 ) return;

    onNewCategory(newInpVal);

    setInputValue('');
  }

  return (
    <>
      <form onSubmit={ onSubmit } aria-label='form'>
        <input id="inputCategoria"
          type="text"
          placeholder="Categoría a buscar..." 
          value={ inputValue }
          onChange={ onChange }/>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}