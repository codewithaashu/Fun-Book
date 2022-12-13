import React from "react";
import { NavLink } from "react-router-dom";

const Post = (props) => {
    return (
        <>
                <div className="card shadow p-0 ms-2 mb-5 bg-body rounded" style={{ maxWidth: "30rem",minHeight:"34rem" }}>
                  <img src={props.img} className="card-img-top imgRounded" alt="Human" width={"462 px"} height={"216px"}/>
                    <div className="card-body">
                        <h5 className="card-title mx-2"style={{fontSize:"24px",fontWeight:"520"}}>{props.title}</h5>
                        <p className="card-text mx-2 pb-4" style={{color:"rgb(55, 65, 81)",fontSize:"16px",lineHeight:"22px",fontWeight:"400"}}>{props.content}</p>
                        <NavLink to={props.link} className="btn btn readMore my-auto mx-2 mb-2" >Read More</NavLink>
                    </div>
                </div>
        </>
    )
}
export default Post;