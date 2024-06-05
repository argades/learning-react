import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testing <GifItem/>', () => { 
  const title = 'Title gif';
  const url = 'http://thunder-cats.com/alan';
  
  test('should test title and url required', () => {

    const { container } = render( <GifItem /> );
    expect( container ).toMatchSnapshot();
  });

  test('should test snapshot', () => {
    
    const { container } = render( <GifItem title={ title } url={ url }/> );
    expect( container ).toMatchSnapshot();
  });

  test('should show image with url and ALT', () => {
    render( <GifItem title={ title } url={ url }/> );
    //Para ver el objeto renderizado y poder extraer lo necesario para las validaciones
    //screen.debug(); 
    // expect( screen.getByRole('img').src ).toBe( url );
    // expect( screen.getByRole('img').alt ).toBe( title );

    // Forma optima para validar más propiedades
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });
  
  
 })