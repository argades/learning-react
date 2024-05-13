const API_KEY = 'UccGy62Oco9aX02Hs5cn7NRcuuaaa3g3';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

request
  .then( resp => resp.json() )
  .then( ({ data }) => {
    const { url } = data.images.original;
    console.log( url );
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
  })
  .catch( console.warn );
