import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';


describe('Test <FirstApp.jsx/>', () => {
  
  
  test('should do snapshot match', () => {
    const title = 'Testeando primer componente';
    const { container } = render( <FirstApp title={ title }/> );
    expect( container ).toMatchSnapshot();
  });
  
  test('should show title into h1', () => {
    const title = 'Testeando primer componente';
    const { container, getByText } = render( <FirstApp title={ title }/> );

    expect( getByText(title) ).toBeTruthy();

    /** Este tipo de pruebas hacer peder flexibilidad al componente */
    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);

  });

  
})
