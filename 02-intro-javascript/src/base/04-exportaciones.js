

import { heroes } from '../data/heroes';

//console.log(heroes);

const getHeroeById = (id) => {
  return heroes.find( h => h.id === id);
};

// const heroe = getHeroeById(3);
// console.log(heroe);

const getHeroeByOwner = (owner) => {
  return heroes.filter( h => h.owner === owner);
};

// const oheroe = getHeroeByOwner('DC');
// console.log(oheroe);

// const mheroe = getHeroeByOwner('Marvel');
// console.log(mheroe);

export {
  getHeroeById,
  getHeroeByOwner
};
