import Logo from "../assests/Images/fc7df1cc184248f0b38ae72f009a41eee0f1d6d1.png";
const BookTour = () => {
  return (
    <>
      <div className="container">
        <div className="topBox mb-4">
          <div className="imgBox">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <div className="bookTourContainer row">
          <div className="headingBox py-4 px-3 col-12 col-md-4">
            <div className="heading">Ready for Paradise?</div>
            <div className="subHeading">
              Reach Out to Forever Maldives for Your Dream Honeymoon
            </div>
          </div>
          <div className="ltineraryFormContainer mx-5 col-12 col-md-8 ltBookTour">
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

        <div className="footerBoxContainer py-4">
          <div className="fbox">
            <div className="title">Phone</div>
            <div className="value">+91 9811911902</div>
          </div>
          <div className="fbox">
            <div className="title">Email</div>
            <div className="value">info@forevermaldives.com</div>
          </div>
          <div className="fbox">
            <div className="title">Social</div>
            <div className="value d-flex gap-2">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTour;
