import {Header} from "./Header.tsx";
import {useEffect, useMemo, useState} from "react";

interface IExample {
    name: string,
    result: number
}

export const UseMemoHook = () => {
    const [digits, setDigits] = useState<number[]>([24, 2])
    const [renders, setRenders] = useState<number>(0)
    const [reload, setReload] = useState<boolean>(false)
    const [resultCalls, setResultCalls] = useState<number>(0)

    useEffect(() => {
        setRenders(prev => prev + 1)
    }, [reload, digits])

    const example: IExample = useMemo(() => {
        setResultCalls(prev => prev + 1)
        return {
            name: `${digits[0]} * ${digits[1]}`,
            result: digits[0] * digits[1]
        }
    }, [digits])

    const newExample = () => {
        setDigits(digits.map(() => (
            Math.floor(Math.random() * 25)
        )))
    }

    return (
        <>
            <Header name={'useMemo'}/>
            <p>Count of renders: {renders}</p>
            <p>Count of fn calls: {resultCalls}</p>
            <br/>
            <p>Math example: {example.name}</p>
            <p>Result: {example.result}</p>
            <button onClick={newExample}>New example</button>
            <button onClick={() => setReload(reload => !reload)}>Re-render component</button>
        </>
    )
}