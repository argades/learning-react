import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-string', ()=>{

  test('getSaludo. Debe retornar Hola Marco', ()=>{
    const name = 'Marco';
    const msg = getSaludo( name );

    expect(msg).toBe(`Hola ${name}`);
  });

})