import React from 'react'
import Logo from "../assests/Images/fc7df1cc184248f0b38ae72f009a41eee0f1d6d1.png"
const Header = () => {
  return (
    <div className="headerContainer">
        <div className="topBox">
            <div className="imgBox">
                <img src={Logo} alt="Logo" />
            </div>
        </div>
        <div className="bottomBox">
          <div className="headingContent">"Embark on Love's Grand Voyage: Your Honeymoon, Our Expertise."</div>
          <div className="navigationInfoBox">
            <div className="infoBox">4N/5D trip @₹72,000/- | Per person</div>
            <div className="navigationBox">Book now</div>
          </div>
        </div>
   </div> 
  )
}

export default Header