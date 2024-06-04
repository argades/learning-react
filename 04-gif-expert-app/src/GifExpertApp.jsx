import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Thunder']);

  const onAddCategory = ( event ) => {
    console.log(event.target);
    const categ = [...categories, event.target.value];
    setCategories(categ);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory/>
      
      {/* Listado */}
      <button onClick={(event) => onAddCategory(event) }>Add category</button>
      <ol>
        { 
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          }) 
        }
      </ol>
    </>
  )
}