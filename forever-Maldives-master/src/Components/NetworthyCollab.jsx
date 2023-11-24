import Bhavya from "../assests/Images/Rectangle 84.png";
import Avantika from "../assests/Images/Rectangle 85.png";
import Shiwangi from "../assests/Images/Rectangle 86.png";
import Pankhuri from "../assests/Images/Rectangle 87.png";
import Delnaaz from "../assests/Images/Rectangle 85(1).png";
import Amulaya from "../assests/Images/Rectangle 86(1).png";
import Chetna from "../assests/Images/Rectangle 87(1).png";
const NetworthyCollab = () => {
  const arr = [
    { imgSrc: Bhavya, name: "Bhavya Monga" },
    { imgSrc: Avantika, name: "Avantika" },
    { imgSrc: Shiwangi, name: "Shiwangi Singh" },
    { imgSrc: Pankhuri, name: "Pankhuri Awasthy Rode" },
    { imgSrc: Delnaaz, name: "Delnaaz Irani" },
    { imgSrc: Amulaya, name: "Amulaya Ratan" },
    { imgSrc: Chetna, name: "Chetna Sharma" },
  ];
  return (
    <div className="networthyContainer">
      <div className="container">
        <div className="headingBox mb-3">
          <div className="heading">Few of our Noteworthy Collabs</div>
          <div className="subHeading mt-2">
            India's Top travel Influencers partner with us to host their <br />{" "}
            Group Trips & Travel Hassle-free
          </div>
        </div>
        <div className="boxContainer pb-5 row gap-5">
          {arr.map((curr, index) => {
            return (
              <div className="box col-6 col-sm-6 col-md-3 col-lg-3" key={index}>
                <img
                  src={curr.imgSrc}
                  alt={curr.name}
                  className="networthyImageStyle"
                />
                <div className="boxText">{curr.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NetworthyCollab;
