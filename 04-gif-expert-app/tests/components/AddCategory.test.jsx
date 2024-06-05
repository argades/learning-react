import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('test <AddCategory/>', () => {
  
  test('should validate input with category value', () => {
    render( <AddCategory onNewCategory={ () => {} }/> );
    //Para disparar el evento se debe obtener la referencia al input del componente
    const input = screen.getByRole('textbox');
    
    //Disparar el evento input simulando que se ingresan valores
    fireEvent.input( input, { target: { value: 'Kaliman'} } );
    
    //Validación
    expect( input.value ).toBe('Kaliman');
    
    //screen.debug();
  });
  
  test('should call onNewCategory method when input has a value', () => {
    
    const inputValue = 'Kaliman';
    
    //Función Mock con jest
    const onNewCategory = jest.fn();

    //Sujeto de pruebas
    // render( <AddCategory onNewCategory={ () => {} }/> );
    render( <AddCategory onNewCategory={ onNewCategory }/> );

    //Obtener la referencia del input
    const input = screen.getByRole('textbox');
    
    //Obtener referencia al formulario.
    //Se debe adicionar propiedad aria-label en el componente para que lo encuentre.
    const form = screen.getByRole('form');
    
    //Disparar el evento input simulando que se ingresan valores
    fireEvent.input( input, { target: { value: inputValue} } );
    
    //Disparar el evento onSubmit
    fireEvent.submit( form );

    //Validación del input vacío
    expect( input.value ).toBe('');

    //Validar llamado de función
    expect( onNewCategory ).toHaveBeenCalled();
    //Validar llamado de función nro de veces
    expect( onNewCategory ).toHaveBeenCalledTimes(1);

    //Validar llamado de función con valor X
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    //screen.debug();

  });
  
  test('shouldn\'t call onNewCategory if empty input ', () => {
    
    const inputValue = '';

    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/>);

    const input = screen.getByRole('textbox');

    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } });

    fireEvent.submit( form );

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    expect( onNewCategory ).not.toHaveBeenCalled();
  })
  
  
})
