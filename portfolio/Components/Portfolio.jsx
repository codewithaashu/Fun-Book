import React, { useState } from 'react'
import boxImg from '../boxImg.png';
import Arrow from '../right-arrow.png'
const Portfolio = () => {
  const [portPop,setPortPop] = useState(false);
  const toggle=()=>{
    setPortPop(true);
    // console.log(true);
  }
  return (
    <>
      <div className="portfolio-main-div">
        <div className="container">
          <div className="row">
            <h1 className='portfolio-h1'>
              My Portfolio
            </h1>
          </div>
          <div className="row ">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 portfolio-main-card-box ">
              <div className="portfolio-card-box p-3">
                <div className='imgBox' >
                </div>
                <div className="card-h px-1">
                  <h6 className='card-h6 pt-2'>
                    Development
                  </h6>
                  <h3 className='card-h3 pt-1'>
                    Blogging Website
                  </h3>
                </div>
              <div className='pt-3'>
                <h6 className='arrow' onClick={toggle}>
                  View More <span><img src={Arrow} alt="Arrow" style={{ rotate: "325deg", width: "15px" }} /></span>
                </h6>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        portPop && 
        <div className="pop-main-div">
          <div className="container" style={{display:"flex",justifyContent:"center"}}>
            <div className="row" >
              <div className="col-12 col-md-6 col-lg-6">
                <div>
                <img src={boxImg} alt="Human Image" />
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div>
                  Close icon
                </div>
                <div>
                  <p>
                    Featured - Development
                  </p>
                  <h3>
                    Blogging Website
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta, illum itaque iusto, debitis voluptas officiis et amet temporibus quaerat aliquid explicabo tempore dolorem possimus enim porro asperiores doloremque molestias?
                  </p>
                  <ul>
                    <li>
                      Created : 4 Dec 2021
                    </li>
                    <li>
                      Created : 4 Dec 2021
                    </li>
                    <li>
                      Created : 4 Dec 2021
                    </li>
                    <li>
                      Created : 4 Dec 2021
                    </li>
                  </ul>
                  <button className='btn-primary'>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Portfolio