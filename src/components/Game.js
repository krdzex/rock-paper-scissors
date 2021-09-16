import React from 'react';
import GameHeader from './GameHeader';
import PlayerChoice from './PlayerChoice';
import { useSelector } from 'react-redux';
import Battle from './Battle';

const Game = () => {
    const computerChoice = useSelector(state => state.battleReducer)
    return (
        <div className="gameWrapper">
            <GameHeader />
            {computerChoice.computerChoice === "" ? <PlayerChoice /> : <Battle />}
        </div>
    );
};

export default Game;
