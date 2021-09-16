import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopUp } from '../actions';
import { useSelector } from 'react-redux';
const GameHeader = () => {
    const dispatch = useDispatch();
    const onClickPopUp = () => {
        dispatch(openPopUp());
    }
    const result = useSelector(state => state.winsReducer);
    return (
        <div className="gameHeader">
            SCORE: {result}
            <button onClick={onClickPopUp}>Rules</button>
        </div>
    );
};

export default GameHeader;