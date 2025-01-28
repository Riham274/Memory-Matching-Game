import { Elevels, ICard } from "../types/@types"

const EMPTY_CARD : ICard = {
    id: 0 , 
    image: '', 
    visible: false
}
/*
export const createGameBoard = (level: Elevels): ICard[] => {

  const totalCards = level * level;

  const cards: ICard[] = Array.from({ length: totalCards / 2 }, (_, index) => ({
      ...EMPTY_CARD,
      id: index,
      image: `https://api.clipart.com/img/previews/education-${index + 1}.jpg` 
  }));
  const pairedCards = [...cards, ...cards];

  return pairedCards.sort(() => Math.random() - 0.5);
};
*/

export const createGameBoard = (level: Elevels) : ICard[] => {
    let cards :ICard[] = Array.from({ length: level * level} , 
      (_, index) => (index % 2 === 0 ) ? {...EMPTY_CARD, id: index } : { ...EMPTY_CARD, id: index - 1, image:''})
      .sort(() => Math.random() - 0.5);

    cards = cards.map(c => ({ ...c, image: `https://api.clipart.com/img/previews/education-${c.id + 1}.jpg`}))
       return cards;
} 
