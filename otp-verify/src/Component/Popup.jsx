import React, { useState } from "react";
const Popup = (props) => {
    const [pin, setPin] = useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setPin([...pin.map((d, idx) => (idx === index ? element.value : d))])
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
    const onkeyup = function (e) {
        if (e.keyCode === 8) {
            e.target.value = ""
            e.target.previousSibling.focus()
        }
    }
    const onkeydown = function (e) {
        if (e.keyCode === 37) {
            e.target.previousSibling.focus()
        }
        if (e.keyCode === 39) {
            e.target.nextSibling.focus()
        }
    }
    const clear = () => {
        setPin(new Array(6).fill(""))

    }
    return (
        <>
            {props.pop && (
                <div className="container-fluid popup-box">

                    <div className="col-md-12 box pin">
                        <div className="text-center">
                            <h3 >
                                Phone Verification
                            </h3>
                            <p color="grey">
                                Enter the Pin you recieved on {document.getElementById("phone").value}
                            </p>

                            {pin.map((data, index) => {
                                return (
                                    <input
                                        className=" mx-1 p"
                                        type="text"
                                        name="pin"
                                        maxLength="1"
                                        key={index}
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onKeyDown={onkeydown}
                                        onKeyUp={onkeyup}
                                        onFocus={e => e.target.select()} style={{ "width": "8%", "textAlign": "center" }}

                                    />
                                );
                            })}
                            <div className="my-2">
                                <button className="my-5" type="button" className="btn btn-success" onClick={props.togglePop} onClickCapture={clear}>Verify Phone Number</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Popup;
