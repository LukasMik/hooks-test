import {UseStateHook} from "./components/UseState.tsx";
import {UseEffectHook} from "./components/UseEffect.tsx";
import {UseContextHook} from "./components/useContext.tsx";
import {UseReducerHook} from "./components/UseReducer.tsx";
import {UseRefHook} from "./components/UseRef.tsx";
import {UseMemoHook} from "./components/UseMemo.tsx";

const App = () => {
    return (
        <ul>
            <li><UseStateHook/></li>
            <li><UseEffectHook/></li>
            <li><UseContextHook/></li>
            <li><UseReducerHook/></li>
            <li><UseRefHook/></li>
            <li><UseMemoHook/></li>
        </ul>
    )
}

export default App
