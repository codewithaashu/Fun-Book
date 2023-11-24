import honeymoonImg from "../assests/Images/Rectangle 100.png";
import icon1 from "../assests/Images/Beach.svg";
import icon2 from "../assests/Images/Vector.svg";
import icon3 from "../assests/Images/Vector(1).svg";
import icon4 from "../assests/Images/Vector(2).svg";
import icon5 from "../assests/Images/Vector(3).svg";
import icon6 from "../assests/Images/Vector(4).svg";
import icon7 from "../assests/Images/Vector(5).svg";
import icon8 from "../assests/Images/Vector(6).svg";
import Drone from "../assests/Images/Drone.svg";
import Food from "../assests/Images/Food.svg";
import Picnic from "../assests/Images/Picnic.svg";
import icon9 from "../assests/Images/Vector(7).svg";
const HoneyMoon = () => {
  const honeymoonContentArr = [
    {
      name: "02 - Night Beach Villa ",
      icon: icon1,
    },
    {
      name: "Romantic Candle Light Dinner",
      icon: icon2,
    },
    {
      name: "01 - Night Water Villa with Pool",
      icon: icon3,
    },
    {
      name: "Couple Spa",
      icon: icon4,
    },
    {
      name: "Floating Breakfast",
      icon: icon5,
    },
    {
      name: "Parasailing",
      icon: icon6,
    },
    {
      name: "Couple Photo Shoot on Sandbank",
      icon: icon7,
    },
    {
      name: "JetSki",
      icon: icon8,
    },
    {
      name: "Couple Drone Shoot on Sandbank",
      icon: Drone,
    },
    {
      name: "Breakfast - Lunch - Dinner + Drinks ",
      icon: Food,
    },
    {
      name: "Sandbank Picnic",
      icon: Picnic,
    },
    {
      name: "Seaplane Transfers",
      icon: icon9,
    },
  ];
  return (
    <>
      <div className="container py-3">
        <div className="honeymoonContainer">
          <div className="honeymoonCont1 py-3">
            <div className="heading">Love in Every Wave: </div>
            <div className="subHeading">
              Experience Maldives with Forever Maldives
            </div>
          </div>
        </div>
        <div className="honeymoonCont2 mt-2">
          <center className="honeymonTitle">Honeymoon Special</center>
        </div>
        <div className="honeymoonContentBox py-4">
          {honeymoonContentArr.map((curr, index) => {
            return (
              <div className="honeyMoonContentCont" key={index}>
                <img src={curr.icon} alt="icon" className="iconStyle" />
                <div className="honeymoonContent">{curr.name} </div>
              </div>
            );
          })}
        </div>
        <center className="honeymoonCont3 py-4">
          <img
            src={honeymoonImg}
            alt="HoneyMoon"
            className="honeymoonImageStyle"
          />
        </center>
      </div>
    </>
  );
};

export default HoneyMoon;
