import {useContext} from "react";
import {ThemeContext} from "../useContext.tsx";

export const Theme = () => {
    const { theme } = useContext(ThemeContext)
    return <p>Theme: {theme}</p>
}