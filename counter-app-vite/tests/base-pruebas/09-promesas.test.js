import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09-promesas', () => {
  
  test('should return heroe using done function', (done) => {
    const id = 1;

    getHeroeByIdAsync( id )
      .then( hero => {
        
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });

        done();
      });
  });

  test('should return error using done function', (done) => {
    const id = 100;

    getHeroeByIdAsync( id )
      .then( hero => {
        
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
          
      }).catch( error => {
        expect(error).toBe(`No se pudo encontrar el héroe con ID: ${id}`);
        done();
      });
  });
  
});
