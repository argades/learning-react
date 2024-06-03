import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('08-imp-exp', () => {
  
  test('should return heroe by id', () => {
    
    const id = 100;
    const hero = getHeroeById( id );

    expect( hero ).toBeFalsy();
  });

  test('should return heroe by Marvel owner', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );

    console.log(heroes);
    
    expect( heroes ).toHaveLength(2);
    expect( heroes.length ).toBe(2);

  });

  test('should return heroe by DC owner', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner );

    console.log(heroes);

    expect( heroes ).toHaveLength(3);
    expect( heroes.length ).toBe(3);

  });
  
})
