import React from "react";
import circle from '../src/hacker.png';
const Contact = () => {
    document.title = "Contact | CodeWithAashu";
    return (
        <>
            <div className="container my-5">
                <div className="row shadow p-3 mb-5 bg-body rounded ">
                    <div className="col-md-7">
                        <div className="text-center">
                            <h1 className="mx-5 mt-5" style={{ fontWeight: "700", fontSize: "30px" }}>
                                Lets talk about everything!
                            </h1>
                            <img className="mx-auto mt-3   py-2" src={circle} alt="Human " width="146px" height="162px" />
                        </div>
                        <h3 className="mt-3  mb-0 text-center" style={{ fontSize: "24px", fontWeight: "500" }}>
                            Feel free to ask us anything!
                        </h3>
                        <p className="mx-5 mb-0 py-4 px-4 text-start" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "20   px" }}>
                            Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions.
                        </p>
                    </div>
                    <div className="col-md-5 my-5">
                        <form className="row g-3">
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label labelClr">Full Name</label>
                                <input type="email" className="form-control boxCss" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label labelClr">Email</label>
                                <input type="text" className="form-control boxCss" id="inputAddress" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label labelClr">Phone</label>
                                <input type="text" className="form-control boxCss" id="inputAddress2" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputCity" className="form-label labelClr">Message</label>
                                <textarea type="text" className="form-control boxCss" id="inputCity" style={{ height: "226px" }} />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" style={{ width: "100%", borderRadius: "10px" }}>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;