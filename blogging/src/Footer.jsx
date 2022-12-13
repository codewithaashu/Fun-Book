import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="p-3  mx-auto bg-light text-dark " style={{ height: "30px", marginTop: "10px " }} id="problem3" >
                <div className="row ">
                    <div className="col-10 mx-auto "style={{width:"100vw"}} ></div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <div className="container-fluid" >
                            <NavLink className="navbar-brand p2 "  to="/" style={{ color: "rgb(17, 24, 39)", fontWeight: "500", fontSize: "20px" }}>AashuTech &nbsp; <span style={{ borderRight: "2px solid rgb(107, 114, 128)" }}></span>&nbsp;&nbsp;<span className="p1" style={{ color: "rgb(107, 114, 128)", fontWeight: "500", fontSize: "14px" }}>
                            Copyright © 2022 CodeWithAashu.com</span>
                            </NavLink>
                            <nav className="navbar navbar-light bg-light " >
                                <div className="container-fluid mx-auto">
                                    <a href="https://www.facebook.com/" target ="_blank" rel="noreferrer" className="fa fa-facebook">&nbsp;</a>
                                    <a href="https://www.linkedin.com/in/ashishranjan1626" rel="noreferrer" target={"_blank"} className="fa fa-linkedin">&nbsp;</a>
                                    <a href="https://www.youtube.com/channel/UCDEdv1iwWUhEi-MvUsZ8y4w" target={"_blank"} rel="noreferrer" className="fa fa-youtube">&nbsp;</a>
                                    <a href="https://www.instagram.com/codewithaashu_/" rel="noreferrer" target={"_blank"} className="fa fa-instagram">&nbsp;</a>
                                </div>
                            </nav>
                        </div>
                    </nav>
                </div>
                </div>
            </>
            );
            }
            export default Footer;