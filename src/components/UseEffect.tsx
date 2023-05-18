import {Header} from "./Header.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const UseEffectHook = () => {
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                setData(response)
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return (
        <>
            <Header name={'useEffect'}/>
            <p>Response: {data ? data.data.results[0].name.first : null}</p>
        </>
    )
}