import PropTypes from 'prop-types';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category }</h3>

      {
        isLoading && (
          <div className="ring">Loading...
            <span></span>
          </div>
        )
      }

      <div className="card-grid">
        {
          images.map(( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}