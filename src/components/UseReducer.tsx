import {Header} from "./Header.tsx";
import {Reducer, useReducer} from "react";

interface IAction {
    type: 'divide_by_2' | 'increase_by_3'
    payload?: any;
}

interface IState {
    foo: number,
    boo: number
}

const reducer = (state: IState, action: IAction): IState => {
    if (action.type === 'divide_by_2') {
        return {...state, foo: state.foo / 2}
    } else if (action.type === 'increase_by_3') {
        return {...state, boo: state.boo + 3}
    }
    throw Error('Unknown action.');
}

export const UseReducerHook = () => {
    const [state, dispatch] = useReducer<Reducer<IState, IAction>>(reducer, {foo: 3252412, boo: 0})

    return (
        <>
            <Header name={'useReducer'}/>
            <p>Foo: {state.foo}</p>
            <p>Boo: {state.boo}</p>
            <button onClick={() => dispatch({type: 'divide_by_2'})}>Foo devide by 2</button>
            <button onClick={() => dispatch({type: 'increase_by_3'})}>Boo increase by 3</button>
        </>
    )
}