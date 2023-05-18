import {Header} from "./Header.tsx";
import React, {createContext, useState} from "react";
import {Theme} from "./parts/Theme.tsx";
import {Content} from "./parts/Content.tsx";

export const ThemeContext: React.Context<any> = createContext('light')
export const UseContextHook = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')


    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Header name={'useContext'}/>
            <Theme/>
            <Content />
        </ThemeContext.Provider>
    )
}