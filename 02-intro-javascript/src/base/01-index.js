
const persona = {
  nombre: 'Gallina',
  apellido: 'Culeca',
  edad: 2,
}
console.log({persona});

const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo, 5];

console.log(arreglo);
console.log(arreglo2);

const arreglo3 = arreglo2.map(function(n) {

});

console.log(arreglo3);

/**
 * Tarea
 * 1. Transformar a función flecha
 * 2. Tiene que retornar un objeto implícito
 * 3. Pruebas
 */

function getUsuarioActivo( nombre ) {
  return {
    uid: 'ABC5462',
    username: nombre,
  }
};

const usuarioActivo = getUsuarioActivo('Marco');
console.log(usuarioActivo);

const activeUser = ( name ) => ({uid: 'ABDC548', name});
console.log(activeUser('Marco'));


