import React from 'react'
import { useTypewriter} from 'react-simple-typewriter'
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaJava} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import hero from "../heroImg.png";
import heroBg from "../heroBg.png";
const Hero = () => {
  const { text } = useTypewriter({
    words: ['MERN Stack Developer', 'Web Designer', 'Programmer'],
    loop: 0,
  })
  return (
    <>
    <div className='hero-active'>
      <div className="container ">
        <div className="row " >
          <div className="col-12 col-md-7 col-lg-7 mt-5 pt-5 subHero">
            <div className='pt-5' style={{height:"30vh",display:"block"}}>
              <p className='hero-p'>
                Welcome to my world
              </p>
              <h1 className='hero-h1'>
                Hi,I'm Ashish Ranjan
              </h1>
              <h3 className='hero-h3'>
                and I'm a <span style={{ color: "#ff014f" }}>{text}</span>
              </h3>
            </div>
            <div className="row mTop">
              <div className="col-6 col-md-6 col-lg-6">
               <h4 className='heroBtn-head'>
               Touch With Me
                </h4>
                <button className='iconBtn'>
                    <FaLinkedinIn className='icon'style={{fontSize:"50px",width:"20px",height:"20px",lineHeight:"50px"}} />
                </button>
                <button className='iconBtn'>
                    <FaInstagram className='icon'style={{fontSize:"50px",width:"20px",height:"20px",lineHeight:"50px"}} />
                </button>
                <button className='iconBtn'>
                    <FaFacebookF className='icon'style={{fontSize:"50px",width:"20px",height:"20px",lineHeight:"50px"}} />
                </button>
                </div>
              <div className="col-6 col-md-6 col-lg-6">
                <h4 className='heroBtn-head'>
                Best Skill On
                  </h4>
                  <button className='iconBtn'>
                    <FaJava className='icon'style={{fontSize:"50px",width:"20px",height:"20px",lineHeight:"50px"}} />
                </button>
                  <button className='iconBtn'>
                    <FaReact className='icon'style={{fontSize:"50px",width:"20px",height:"20px",lineHeight:"50px"}} />
                </button>
                  <button className='iconBtn'>
                    <FaNodeJs className='icon'style={{fontSize:"50px",width:"20px",height:"20px",lineHeight:"50px"}} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 mt-5 pt-4" style={{display:"block"}}>
            <div style={{ display: "flex", boxSizing: "border-box", maxWidth: "450px", alignSelf: "flex-start", justifyContent: "center" }}>
            <img className="hero-image-bg" src={heroBg} alt="Hero Image Background" data-w-id="6b044c6e-7288-7b25-07f8-80f4cc345ab7" loading="lazy" />
            <img className='hero-img' src={hero} alt="Ashish Photo" />
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero
