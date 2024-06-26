import React from 'react';
import {useSelector, useDispatch, Provider} from 'react-redux';
import {createStore} from "redux";

function HelloRedux() {
    function reducer(currentState, action) {
        if (currentState === undefined) {
            return {
                number: 1,
                text: 'hello'
            };
        }
        const newState = {...currentState};
        if (action.type === 'PLUS') {
            newState.number++;
            newState.text = `plus${newState.number}`;
        } else if (action.type === 'MINUS') {
            newState.number--;
            newState.text = `minus${newState.number}`;
        }

        return newState;
    }

    const store = createStore(reducer)

    return (
        <div id="container">
            <h1>Root</h1>
            <div id="grid">
                <Provider store={store}>
                    <Left1></Left1>
                    <Right1></Right1>
                </Provider>
            </div>
        </div>
    );

    function Left1(props) {
        console.log('1')
        return (
            <div>
                <h1>Left1 : {props.number}</h1>
                <Left2></Left2>
            </div>
        )
    }

    function Left2(props) {
        console.log('2')
        return (
            <div>
                <h1>Left2 : {props.number}</h1>
                <Left3></Left3>
            </div>
        )
    }

    function Left3(props) {
        console.log('3')
        const number = useSelector((state) => state.number);
        const text = useSelector((state) => state.text);
        return (
            <div>
                <h1>Left3 : {number}, text : {text}</h1>
            </div>
        )
    }

    function Right1(props) {
        return (
            <div>
                <h1>Right :</h1>
                <Right2></Right2>
            </div>
        )
    }

    function Right2(props) {
        return (
            <div>
                <h1>Right2 :</h1>
                <Right3></Right3>
            </div>
        )
    }

    function Right3(props) {
        const dispatch = useDispatch();
        return (
            <div>
                <h1>Right3</h1>
                <input type="button" value="+" onClick={() => {
                    dispatch({type: 'PLUS'})
                }}></input>
                <input type="button" value="-" onClick={() => {
                    dispatch({type: 'MINUS'})
                }}></input>
            </div>
        )
    }

}

export default HelloRedux;