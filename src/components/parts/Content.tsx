import {useContext} from "react";
import {ThemeContext} from "../useContext.tsx";

export const Content = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button>
    )
}