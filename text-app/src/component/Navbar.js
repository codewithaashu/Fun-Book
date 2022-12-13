//aap ek cutomised components(function based components) bna skte ho aur usko kuch arguments send kr skte ho jisko props kehte hn aur iss props ke type aur default value ko set kr skte hn.
//components ko reuse kr skte ho kahi pe v import kr skte ho
//props is short form of properties
//custom components is creating using rfc
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
/*     const toggleStyle =()=>{
        console.log("Click")
        if(myStyle.color ==='black')
        {
            setStyle({
                color:'white',
                backgroundColor :'black'
            })
        }
        else
        {
            setStyle({
                color:'black',
                backgroundColor :'white'
            })
        }
    //aap use state ka use krke style change kr skte ho
    // object ko myStyle me store kr liya aur setStyle se style change kr  do.
    }
    const [myStyle, setStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })                             */
    return (
        < >
            <nav className="navbar navbar-expand-lg navbar" style={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" to="/" style={props.mode}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={props.mode}>Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" aria-current="page" to="/about" style={props.mode}>{props.aboutText}</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" aria-current="page" to="/contact" style={props.mode}>Contact Us</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-20">
                            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                            <label className ="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
//js ko simply curly brace se use krte hn.
//prop types ki bhi aap specify kr skte ho aur dedault value v set kr skte hn
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "Text-Utils",
    aboutText: "About Us"
}
//ye tb render hoga jb aap props ki value paass ni kroge.