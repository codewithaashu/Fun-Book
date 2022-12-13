import React from "react";
const Home = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-md-12 text-center my-5 py-5">

                    <div className="my-5 py-5">
                        <img src="https://cdn.pixabay.com/photo/2017/01/13/01/22/mobile-1976104_1280.png" alt="Mobile" width={"200px"} />
                        <h3 className="my-3">
                            Verify Phone Number
                        </h3>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Enter your phone number" />
                        <div className="my-3">
                            <button className="my-3" type="button" className="btn btn-success" onClick={props.togglePop}>Send SMS with Code</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;