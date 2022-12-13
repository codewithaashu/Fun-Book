import React, { useState } from "react";
import Popup from "./Component/Popup";
import Home from "./Component/Home";
const App = () => {
    const [pop, setPopup] = useState(false);
    const togglePop = () => {
        if (pop) {
            setPopup(false);
        }
        else {
            setPopup(true)
        }
    }
    return (
        <>
            <Home pop={pop} togglePop={togglePop} />
            <Popup pop={pop} togglePop={togglePop} />
        </>
    )
}
export default App;
