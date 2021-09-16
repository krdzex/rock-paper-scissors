import React from 'react';
import { useSelector } from 'react-redux';
import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import vs from "../images/vs.png"
import Result from './Result';
import { useDispatch } from 'react-redux';
import { newGame } from '../actions';

const Battle = () => {
    const dispatch = useDispatch();
    const obj = {
        "rock": rock,
        "paper": paper,
        "scissors": scissors
    }
    const players = useSelector(state => state.battleReducer);

    return (
        <div className="battle">
            <div className="images">
                <div id={players.myChoice}>
                    <img src={obj[players.myChoice]} alt="my choice"></img>
                    <p>You</p>
                </div>
                <div className="vs">
                    <img src={vs} alt="vs"></img>
                    <button onClick={() => dispatch(newGame())}>Play again</button>
                </div>
                <div id={players.computerChoice}>
                    <img src={obj[players.computerChoice]} alt="computer choice"></img>
                    <p>Computer</p>
                </div>
            </div>
            <Result />
        </div >
    );
};

export default Battle;