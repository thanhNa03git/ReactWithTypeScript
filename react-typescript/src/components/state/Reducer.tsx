import { useReducer } from "react"

/* 
    1. initial state 
    2. action
    3. reducer
    4. dispatch
*/

export const Reducer = () =>{
    // initial
    const initial = 0;

    // action
    const UP_ACTION = 'up';
    const DOWN_ACTION = 'down';

    // Reducer
    const reducer = (state: number, action : string) => {
        console.log('reducer is running...');
        switch(action) {
            case UP_ACTION:
                return state + 1;
            case DOWN_ACTION:
                return state - 1;
            default:
                throw new Error('invalid action')
        }        
    }
    const [count, dispatch] = useReducer(reducer, initial);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {dispatch(DOWN_ACTION)}}>Down</button>
            <button onClick={() => {dispatch(UP_ACTION)}}>Up</button>
        </>
    )
}