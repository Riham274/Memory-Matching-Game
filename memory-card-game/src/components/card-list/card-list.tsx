import { useState } from 'react';
import { Elevels } from '../../types/@types';
import Card from '../card/card';
import './card-list.css'
import { createGameBoard } from '../../utils/game.util';

const CIRRENT_LEVEL = Elevels.MEDIUM;

const CardList = () => {
    const [cards,setCards] = useState(createGameBoard(CIRRENT_LEVEL));
    return (
        <div className={`card-list level_${CIRRENT_LEVEL}`}>
            
            {
              cards.map((card, index) => <Card key={index} data={card} />)
            }
        </div>
    )
}

export default CardList;