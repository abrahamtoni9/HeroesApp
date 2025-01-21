
import { heroes } from '../data/heroes';

export const getHeroBy = ( id ) => {
  
  return heroes.find(hero => hero.id === id);

}



