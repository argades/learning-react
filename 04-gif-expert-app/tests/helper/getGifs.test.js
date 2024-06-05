import { getGif } from "../../src/helper/getGifs";

describe('Pruebas getGifs', () => {
  
  test('should return a gif', async () => {
    
    const gifs = await getGif('Kaliman');

    //console.log(gifts);
    expect( gifs.length ).toBeGreaterThan( 0 );
    
    //Validar la estructura del objeto por no saber qué espera
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    })
  })
  
})
