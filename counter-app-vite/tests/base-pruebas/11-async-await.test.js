import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('11-async/await', () => {
  
  test('should return URL image', async () => {
    const url = await getImagen();
    console.log(url);
    //expect(typeof url ).toBe('string');
  });
  
});
