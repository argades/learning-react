import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Happy Dogs AI']);

  const onAddCategory = ( newCategory ) => {
    const isExist = categories.filter( c => c.toUpperCase() === newCategory.toUpperCase()).length > 0;

    if(isExist){
      throw Error(`Categoría '${newCategory}' existe!`);
    }
    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      { 
        categories.map( category => (
          <GifGrid key={category} category={ category }/>
        )) 
      }
    </>
  )
}