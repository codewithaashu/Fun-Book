import room1 from "../assests/Images/Rectangle 32.png";
import room2 from "../assests/Images/Rectangle 32(1).png";
import news1 from "../assests/Images/Dailyhunt-logo-2-1-e1594105652565 1.png";
import news2 from "../assests/Images/India-saga-English 1.png";
import news3 from "../assests/Images/India-saga-English 2.png";
const Featured = () => {
  return (
    <>
      <div className="container py-4">
        {/*         <div className="aboutHeading">
          Explore the <span className="maldivesStyle">maldives</span> <br />
          stays and rooooooms
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <img src={room1} alt="Room" className="featuredImageStyle" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
            <img src={room2} alt="Room" className="featuredImageStyle" />
          </div>
  </div> */}
        <center className="featuredTextStyle py-3">Featured In the News</center>
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
            <img src={news2} alt="Room" className="newsImageStyle" />
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
            <img src={news1} alt="Room" className="newsImageStyle" />
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
            <img src={news3} alt="Room" className="newsImageStyle" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
