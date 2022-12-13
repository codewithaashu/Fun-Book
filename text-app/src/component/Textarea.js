import React,{useState} from 'react'

export default function Textarea(props) {
    function upperChange()
    {
        updateText(text.toUpperCase())
        //app.js ke showAlert ko use krna h to props.showAlert
        props.showAlert("Successfully ! Converted to UpperCase","success")
    }
    function lowerChange()
    {
        updateText(text.toLowerCase())
        props.showAlert("Successfully ! Converted to LowerCase",'success')
    }
    function changeText(e){
        updateText(e.target.value)
    }
    const [text,updateText] = useState("Enter text here")
    //ye initial hn
    // text = "Ashish"
    //react me hum direct assignment se change ni kr skte hn.
    // e.g text = "ashish" it is wrong way
    //hum text  ko ek variable me store krenge aur usko change krenge
    //variable text me store hoga aur usko change ya uske state ko updateText se change krenge
    return (
        <>
            <div className="form-floating my-3 mx-3" style={props.mode}>
                <textarea className="form-control area" placeholder="Leave a comment here" value = {text} onChange ={changeText} id="floatingTextarea" style={props.mode}></textarea>
                <button type="button" className="btn btn-primary my-3" onClick={upperChange}>Convert to Upper Case</button>
                <button type="button" className="btn btn-warning mx-2" onClick = {lowerChange}>Convert to Lower Case</button>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>Average {text.length*0.008} minutes to read this words</p>
                <h3>Preview</h3>
                <div className="preview">
                    <p className="mx-2">
                        {text}
                    </p>
                </div>
            </div>
        </>
    )
}
// ye iske state huyi 
// hum iske state ko change kr skte hn useState ka use krke.