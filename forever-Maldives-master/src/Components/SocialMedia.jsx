import iphone from "../assests/Images/X.svg";
import travelChart from "../assests/Images/Component 3.png";
import videoImage from "../assests/Images/Untitled design (10) 1(1).svg";
const SocialMedia = () => {
  return (
    <div className="container py-5">
      <div className="socialMediaContainer">
        <div className="socialMediaBox">
          <div className="heading1">
            Your <span>maldives</span> <br /> Brief Itinerary
          </div>
          <img
            src={travelChart}
            alt="Travel Chart"
            className="travelChartImage"
          />
        </div>
        <div className="socialMediaBox">
          <div className="heading2">
            &nbsp; <br /> &nbsp;
          </div>
          <img src={videoImage} alt="Video" className="travelChartImage" />
        </div>
        <div className="socialMediaBox">
          <div className="heading2">
            Our <br /> Social Media
          </div>
          <img src={iphone} alt="Social Media" className="travelChartImage" />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
