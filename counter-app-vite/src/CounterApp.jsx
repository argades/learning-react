import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

  const [counter, setCounter ] = useState(value);

  const handledAdd = () =>{
    setCounter( counter + 1 );
  }

  const handledSubtract = () => setCounter( counter - 1 );

  const handledReset = () => setCounter( value );

  return (
    <>
      <h1>Counter APP</h1>
      <h2>{ counter }</h2>

      <button type="button" onClick={ handledAdd }>+1</button>
      <button type="button" onClick={ handledSubtract }>-1</button>
      <button aria-label="btn-reset" type="button" onClick={ handledReset }>Reset</button>
    </>
  )
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}