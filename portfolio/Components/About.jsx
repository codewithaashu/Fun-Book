import React from 'react'
import hero from "../heroImg.png";
import { GrUserExpert } from "react-icons/gr";
import aboutCardDB from '../DataBase/AboutCard';
import Skills from './Skills';
const About = () => {
    return (
        <>
            <div className='about-main-div'>
                <div className="container pt-5">
                    <div className="row">
                        <h1 className='about-h1' style={{ textAlign: "center" }}>
                            About Me
                        </h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 col-lg-6 about-img-div">
                            <img src={hero} alt="Ashish Pic" style={{ height: "280px", borderRadius: "20px" }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className='aboutDiv pt-5'>
                                {
                                    aboutCardDB.map((curElem,id)=>{
                                        const {logo,heading,subHeading} =curElem;
                                        return(
                                            <div className="aboutCard" key={id}>
                                    <div className='pt-3 pb-3' style={{ textAlign: "center" }}>
                                        <img src={logo} alt="icon" style={{ width: "40px", color: "" }} />
                                    </div>
                                    <h4 className='aboutCard-h1'>
                                        {heading}
                                    </h4>
                                    <p className='aboutCard-p'>
                                        {subHeading}
                                    </p>
                                </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='about-p-div'>
                            <p className='about-p'>
                            I am an enthusiastic developer who love exploring and trying hands at different tech stacks. I have a great passion for coding and development. I am currently working on Web Development(especially Back-end) along with Java.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            <Skills/>
            </div>
        </>
    )
}

export default About