import React,{useState} from 'react'

export default function Contact() {
    let isNameValid,isEmailValid,isPhoneValid;
    function nameFunc(e) {
        let reg = /^[a-z?A-Z\u00C0-\u02AB'´`]+\.?\s([a-z?A-Z\u00C0-\u02AB'´`]+\.?\s?)+$/
        if (reg.test(e.target.value)) {
            isNameValid = true
            setNameStyle({
                display:'none'
            })
        }
        else {
            isNameValid = false
            setNameStyle({
                display:'block'
            })
        }
    }
    function emailFunc(e){
        let reg = /^\d{0,20}?\w{0,20}@gmail.com$/
        if(reg.test(e.target.value))
        {
            isEmailValid =true
            setEmailStyle({
                display:'none'
            })
        }
        else
        {
            isEmailValid =false
            setEmailStyle({
                display:'block'
            })
        }
    }
    function phoneFunc(e) {
        let reg = /^\d{10}$/
        if (reg.test(e.target.value)) {
            isPhoneValid = true
            setPhoneStyle({
                display:'none'
            })
        }
        else {
            isPhoneValid = false
            setPhoneStyle({
                display:'block'
            })
        }
    }
    function btnFunc(){
        console.log("p")
        if(isNameValid&&isEmailValid&&isPhoneValid)
        {
            console.log("c")
            setBtnStyle({
                display:'block'
            })
        }
        else
        {
            setBtnStyle({
                display:'none'
            })
        }
/*         nameArea.value = ""
        emailArea.value = ""
        phoneArea.value = ""
        msgeArea.value = "" */
    }
    const [myNameStyle, setNameStyle] = useState({
        display:'none'
    })
    const [myEmailStyle, setEmailStyle] = useState({
        display:'none'
    })
    const [myPhoneStyle, setPhoneStyle] = useState({
        display:'none'
    })
    const [myBtnStyle, setBtnStyle] = useState({
        display:'none'
    })
    return (
        <>
            <div id="container">
                <div id="formBox">
                    <div id="success" style={myBtnStyle}>
                        Your form has been successfully submitted. We Will contact you soon.
                    </div>
                    <div id="heading">
                        Get in Touch
                    </div>
                    <div id="nameBox">
                        <input type="text" id="name" onBlur={nameFunc} placeholder="Name" />
                        <div id="errorName" style={myNameStyle}>
                            Invalid Name
                        </div>
                    </div>
                    <div id="emailBox">
                        <input type="text" id="email" onBlur={emailFunc} placeholder="Email" />
                        <div id="errorEmail" style={myEmailStyle}>
                            Invalid email address
                        </div>
                    </div>
                    <div id="phoneBox">
                        <input type="text" id="phone" onBlur={phoneFunc} placeholder="Mobile Number" />
                        <div id="errorPhone" style={myPhoneStyle}>
                            Invalid Phone Number
                        </div>
                    </div>
                    <div id="msgBox">
                        <textarea name="msg" id="msg" cols="20" rows="5" placeholder="Message"></textarea>
                    </div>
                    <div id="btnBox">
                        <button id="btn" onClick={btnFunc}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}
