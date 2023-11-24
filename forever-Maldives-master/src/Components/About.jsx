import feeHiddenImage from "../assests/Images/cdeb6d3205186816ed858a1aa8da7c3b.png";
import flight from "../assests/Images/airplane.png";
import hotel from "../assests/Images/Hotel.png";
import meal from "../assests/Images/Meal.png";
import activities from "../assests/Images/Seaweed.png";
import plenty from "../assests/Images/Like Cloud.png";
const About = () => {
  const inclusionArr = [
    {
      imgSrc: flight,
      title: "Direct Flights",
      subTitle: "Vistara Direct Flights Ex-Delhi",
    },
    {
      imgSrc: hotel,
      title: "Hotel Stays (4 Nights)",
      subTitle: "Beach front hotel (Sea-view rooms)",
    },
    {
      imgSrc: meal,
      title: "Meals",
      subTitle: "Buffet Breakfast and Dinner",
    },
    {
      imgSrc: activities,
      title: "Activities",
      subTitle: "2 Excursions (including Shark bay trip)",
    },
    {
      imgSrc: plenty,
      title: "Plenty of Extras",
      subTitle: "Airport transfer, Underwater footage",
    },
  ];
  return (
    <div className="container py-4 d-flex flex-column aboutCont">
      <div
        className="row my-4 inclusionMainContainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="col-12 col-sm-12 col-md-5 inclusionMainBox">
          <div className="inclusionBox">
            <div className="inclusionContent">
              <h2 className="inclusionTitle">Inclusions</h2>
              <div className="inclusionSubTitle">
                The Ultimate <br /> all-Inclusive Itinerary
              </div>
            </div>
            <div className="inclusionImage">
              <img
                src={feeHiddenImage}
                alt="No Hidden fee"
                className="w-100 h-100"
              />
            </div>
          </div>
          <div className="inclusionContentBox my-4">
            {inclusionArr.map((currElem, index) => {
              return (
                <div className="inclusion" key={index}>
                  <div
                    className="inclusionImg p-1"
                    style={{
                      order: index % 2 === 0 ? 1 : 2,
                      background: index % 2 === 0 ? "#2959a1" : "#0dbdad",
                    }}
                  >
                    <img src={currElem.imgSrc} alt="Flight" className="w-100" />
                  </div>
                  <div
                    className="inclusionItem"
                    style={{
                      order: index % 2 !== 0 ? 1 : 2,
                      background: index % 2 !== 0 ? "#2959a1" : "#0dbdad",
                      left: index % 2 !== 0 ? "10px" : "",
                      right: index % 2 !== 0 ? "" : "10px",
                    }}
                  >
                    <div className="inclusionItemTitle">{currElem.title}</div>
                    <div className="inclusionItemSubTitle">
                      {currElem.subTitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-7 ltineraryContainer">
          <div className="ltineraryFormContainer">
            <div className="heading">Get Itinerary</div>
            <div className="SubHeading py-1">
              One stop Hassle-free experience like no other
            </div>
            <form className="tripForm my-3">
              <div className="mb-1">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-1">
                <label for="exampleInputPassword1" className="form-label">
                  WhatsApp Number*
                </label>
                <input type="tel" className="form-control" />
              </div>
              <div className="mb-1">
                <label for="exampleInputPassword1" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-1">
                <label for="exampleInputPassword1" className="form-label">
                  City*
                </label>
                <input type="text" className="form-control" />
              </div>
              <center>
                <button type="submit" className="tripBtn my-2">
                  Get Trip Details
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
