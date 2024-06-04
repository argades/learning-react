import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Thunder']);

  const onAddCategory = ( newCategory ) => {
    //console.log(newCategory);
    setCategories([...categories, newCategory]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {/* Listado */}
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