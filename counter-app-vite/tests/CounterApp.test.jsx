import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en el <CounterApp/>', () => { 

  const initVal = 20;

  test('should be match with snapshot', () => {
    
    const { container } = render( <CounterApp value={ initVal }/> );

    expect( container ).toMatchSnapshot();
  });

  test('should be eval initil value to 100', () => {
    
    render( <CounterApp value={ 100 }/> );

    expect( screen.getByText(100) ).toBeTruthy();
  });

  test('should increment when click button +1', () => {
    
    render( <CounterApp value={ initVal }/> );
    fireEvent.click( screen.getByText('+1'));
    expect( screen.getByText('21')).toBeTruthy();

  });

  test('should decrement when click button -1', () => {
    
    render( <CounterApp value={ initVal }/> );
    fireEvent.click( screen.getByText('-1'));
    expect( screen.getByText('19')).toBeTruthy();

  });
  
  test('should be reset when click button Reset', () => {
    
    render( <CounterApp value={ initVal }/> );
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('Reset'));
    
    expect( screen.getByText('20')).toBeTruthy();

  });

  test('should be reset when click button Reset', () => {
    
    render( <CounterApp value={ 300 }/> );
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));
    fireEvent.click( screen.getByText('+1'));

    fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );

    expect( screen.getByText('300')).toBeTruthy();

  });
  
  
});