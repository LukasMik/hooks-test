import {Header} from "./Header.tsx";
import {useState} from "react";

export const UseStateHook = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <>
            <Header name={'useState'} />
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter => counter + 1)}>Click me!</button>
        </>
    )
}