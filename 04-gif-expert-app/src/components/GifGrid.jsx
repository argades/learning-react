

const getGif = async () => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=Oe2iSNIZXGbeqNbR9wHhnDe7TDVZfCR0&limit=20`;
  const response = await fetch( url );

  const { data } = await response.json();

  const gifs = data.images( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  console.log(gifs);
  return gifs;
}

export const GifGrid = ( { category } ) => {

  getGif(category);

  return (
    <>
      <h1>{ category }</h1>
      <p>KK</p>
    </>
  )
}