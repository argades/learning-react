
const personajes = ['Goku', 'Vegeta', 'Trunk'];
const [,, p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ['ASDFV', 124313];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. el primer valor del arreglo se llamará nombre
//2. el segundo valor se llamará setNombre
const ruseStato = (valor) => {
  return [valor, () => { console.log('Hi world')}]
}

const [nombre, setNombre] = ruseStato('Chanpy');
console.log(nombre);
setNombre();