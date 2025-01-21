
import { heroes } from '../data/heroes';

export const getHeroByName = ( name = '' ) => {
  
  const names = name.toLocaleLowerCase().trim();
  
  if ( name.length === 0 ) return [];

  return heroes.filter(hero => hero.superhero.toLowerCase().includes(names));

}



