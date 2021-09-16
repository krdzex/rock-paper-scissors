import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { lose, win } from '../actions';

const Result = () => {
    const dispatch = useDispatch()
    const players = useSelector(state => state.battleReducer);
    const [resultOfMatch, setResultOfMatch] = useState("")
    const [reason, setReason] = useState("")
    useEffect(() => {
        if (players.myChoice === players.computerChoice) {
            setResultOfMatch("No winner!")
            setReason("Match is tied.")
            return
        }
        if (players.myChoice === "rock" && players.computerChoice === "scissors") {
            setResultOfMatch(`You WON`)
            setReason(`${players.myChoice} beat ${players.computerChoice}`)
            dispatch(win())
            return
        }
        if (players.myChoice === "paper" && players.computerChoice === "rock") {
            setResultOfMatch(`You WON`)
            setReason(`${players.myChoice} beat ${players.computerChoice}`)
            dispatch(win())
            return
        }
        if (players.myChoice === "scissors" && players.computerChoice === "paper") {
            setResultOfMatch(`You WON`)
            setReason(`${players.myChoice} beat ${players.computerChoice}`)
            dispatch(win())
            return
        }
        dispatch(lose())
        setResultOfMatch(`Computer WON`)
        setReason(`${players.myChoice} beat ${players.computerChoice}`)
    }, [players.computerChoice])
    return (
        <div className="result">
            <p>{resultOfMatch}</p>
            <p>{reason}</p>
        </div>
    );
};

export default Result;