import { useEffect } from "react";
import { getGif } from "../helper/getGifs";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifGrid = ( { category } ) => {

  useEffect( () => {
    getGif(category);

  }, []);

  return (
    <>
      <h1>{ category }</h1>
    </>
  )
}