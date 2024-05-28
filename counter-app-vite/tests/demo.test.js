
describe('Pruebas en <XComponent/>', () =>{

  test('should be run', () => {
  
    const msg1 = 'Hola mundo';
    const msg2 = msg1.trim();
  
    expect( msg1 ).toBe( msg2 );
  });
});
