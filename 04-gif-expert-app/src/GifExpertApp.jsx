import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Thunder']);

  const onAddCategory = ( newCategory ) => {
    //console.log(newCategory);
    const isExist = categories.filter( c => c.toUpperCase() === newCategory.toUpperCase()).length > 0;

    if(isExist){
      throw Error(`Categoría '${newCategory}' existe!`);
    }
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