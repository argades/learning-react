import { getHeroeById } from "./04-exportaciones";

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() =>{
//     //console.log('11111');
//     const heroe = getHeroeById(3);
//     // console.log(heroe);
//     resolve( heroe ); // Pasa el resultado al then de la promesa
//   }, 2000);
// });

// promesa.then( ( heroe ) => {
//   console.log('Then de la promesa')
//   console.log(heroe);
// }).catch( err => console.log( err ));

const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
  
    setTimeout(() =>{
      const heroe = getHeroeById(id);
      if( heroe !== undefined ){
        resolve( heroe ); // Pasa el resultado al then de la promesa
      } else {
        reject(`Heroe con ID: ${id}, no se encuentra`);
      }
    }, 2000);
  });
}

getHeroeByIdAsync(2).then( ( heroe ) => {
  const { name, owner } = heroe;
  console.log( `Heroe ${name} propietario de ${owner}`);
}).catch( (err) => console.error( err ));

getHeroeByIdAsync(10)
  .then( console.log ) // El valor enviado por referencia lo toma como parámetro
  .catch( console.error );
