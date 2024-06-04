import { useEffect, useState } from "react";
import { getGif } from "../helper/getGifs";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([]);
  
  const getImages = async () => {
    const newImages = await getGif(category);
    
    console.log(newImages);

    setImages(newImages);
  }

  useEffect( () => {
    getImages();
  }, []);

  return (
    <>
      <h3>{ category }</h3>

      <ol>
        {
          images.map(({id, title}) => {
            return (
              <li key={ id }>{ title }</li>
            )
          })
        }
      </ol>
    </>
  )
}