import React from 'react';
import rock from "../images/rock.png"
import paper from "../images/paper.png"
import scissors from "../images/scissors.png"
import { useDispatch } from 'react-redux';
import { computerChoice, myChoice } from '../actions';
const PlayerChoice = () => {
    const dispatch = useDispatch();
    const choiceArray = ["rock", "paper", "scissors"];

    const pickMyChoice = (choice) => {
        dispatch(myChoice(choice))
        let randomNumber = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        dispatch(computerChoice(choiceArray[randomNumber]))
    }

    return (
        <div className="playerChoiceWrapper">
            <div className="images">
                <div id="rock" onClick={() => pickMyChoice("rock")}>
                    <img src={rock} alt="rock"></img>
                    <p>Rock</p>
                </div>
                <div id="paper" onClick={() => pickMyChoice("paper")}>
                    <img src={paper} alt="paper"></img>
                    <p>Paper</p>
                </div>
                <div id="scissors" onClick={() => pickMyChoice("scissors")}>
                    <img src={scissors} alt="scissors"></img>
                    <p>Scissors</p>
                </div>
            </div>
            <h2>Pick one!</h2>
        </div>

    );
};

export default PlayerChoice;