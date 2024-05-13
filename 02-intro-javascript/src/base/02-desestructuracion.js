
const persona = {
  nombre: 'Gallina',
  apellido: 'Culeca',
  edad: 2,
}

const sheroe = {
  nombre: 'Mutant',
  rango: 'X',
  edad: 52,
  clave: 'Sargent',
}

/**
 * DESESTRUCTURACION DE OBJETOS
 */

const { nombre } = persona;

console.log(nombre);

const retornaPersona = ({ nombre, edad, apellido }) =>{
  console.log( `${nombre} ${apellido}, ${edad}`);
};

retornaPersona(persona);


const ruseContexto = ({nombre, rango = 'Captain', clave, edad}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlong: {
      lat: 12.098,
      lng: -0.3492
    }
  }
};

// const sh = ruseContexto(sheroe);
//const {nombreClave, anios} = sh;
//console.log(nombreClave, anios);

const {nombreClave, anios, latlong:{lat, lng}} = ruseContexto(sheroe);

console.log(nombreClave, anios);
console.log(lat, lng);
