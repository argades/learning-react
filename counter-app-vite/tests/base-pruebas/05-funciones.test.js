import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('05-funciones', ()=>{

  test('should return user', () => {
    const tstUsr = {
      uid: 'ABC123',
      username: 'maosorio'
    };

    const usr = getUser();

    expect(usr).toStrictEqual(tstUsr);
  });

  test('should return user maosorio', ( ) => {
    const name = 'maosorio';

    const tstUsr = {
      uid: 'ABC567',
      username: name
    };

    const usr = getUsuarioActivo(name);

    expect( usr ).toEqual(tstUsr);
  })
  
  
})