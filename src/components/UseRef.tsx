import {Header} from "./Header.tsx";
import {useRef} from "react";

export const UseRefHook = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <Header name={'useRef'}/>
            <input className='events-none' ref={inputRef} placeholder="Click on the button &#128073;"/>
            <button onClick={() => inputRef.current ? inputRef.current.focus() : null}>Start writing!</button>
        </>
    )
}