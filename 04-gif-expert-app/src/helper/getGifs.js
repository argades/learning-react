
/**
 * 
 * @returns gifs
 */
export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=Oe2iSNIZXGbeqNbR9wHhnDe7TDVZfCR0&limit=10`;
  const response = await fetch( url );

  const { data } = await response.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  console.log(gifs);
  return gifs;
}