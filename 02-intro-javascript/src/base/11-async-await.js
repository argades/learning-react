
const getImage = async() => {

  try {
    const API_KEY = 'UccGy62Oco9aX02Hs5cn7NRcuuaaa3g3';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await response.json();
  
    console.log(data);
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append( img );
 
  } catch (error) {
    console.error(error);
  }  
}

getImage();
