import { useReducer } from "react"
type countState = {
    count: number
};
    type updateAction = {
        type: 'up'|'down',
        payload: number
    };
    type resetAction = {
        type: 'reset'
    };
type countAction = updateAction | resetAction;

const initial  = {count : 0};
const reducer = (state: countState, action: countAction) => {
    console.log(action.type)
    switch (action.type) {
        case 'up':
            return {count : state.count + action.payload }
        case 'down':
            return {count : state.count - action.payload}
        case 'reset':
            return initial
        default:
            return state
    }
}
export const Counter =()=>{
    const [state, dispatch] = useReducer (reducer, initial);

    return(
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'down', payload: 10})}>Down 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'up', payload:10})}>Up 10</button>

        </>
    )
}
