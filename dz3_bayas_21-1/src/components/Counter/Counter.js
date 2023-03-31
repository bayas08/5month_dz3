import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {types} from "../../redux/reducer/reducer";

const Counter = () => {
    const dispatch = useDispatch()
    const { count } = useSelector(state => state)

    const plus = () => {
        dispatch ({type: types.PLUS})
    }

    const minus = () => {
        dispatch({type: types.MINUS})
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default Counter;