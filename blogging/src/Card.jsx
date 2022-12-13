import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
    const sc = () => {
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    }
    return (
        <>
                <h5 className="card-header" style={{ backgroundColor: "white", border: "none",color:"rgb(75, 85, 99)",fontWeight:"300",lineHeight:"12px" }}>{props.date}</h5>
                <div className="card-body">
                    <h5 className="card-title coursesCard">{props.title}</h5>
                    <p className="card-text" style={{color:"rgb(75, 85, 99)",lineHeight:"24px",marginTop:"8px"}}>{props.content}</p>
                    <NavLink to={props.link} onClick={sc} className="btn btn-outline-dark " id="scroll" style={{textDecorationStyle:"solid"}}>Read More</NavLink>
                </div>
        </>
    )
}
export default Card;