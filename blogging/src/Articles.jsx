import React from "react";
const Articles = (props) => {
    const scroll = () => {
        if (window.scrollY) {
            window.scroll(0, 0);
        }
    }
    return (
        <>
            <div className="container col-md-10 mx-auto">
                <div className="content my-5 pt-5">
                    <h1 className="ms-5 col-md-10 text-start" style={{ fontSize: "36px", fontWeight: "700", lineHeight: "40px" }}>
                        {props.heading1}
                    </h1>
                    <p className="ms-5 col-md-10" style={{ fontSize: "16px", fontWeight: "400", lineHeight: "24px", color: "rgb(75, 85, 99)" }}>
                        Published {props.publishedAt}
                    </p>
                    <img src={props.imgsrc} className="mx-5 mt-2 text-center col-md-10" alt="Human " width={"80%"} />
                    <div className="mt-3 pt-3">

                        {props.h1content1.map(function (element, index) {
                            return <p className="my-3 ms-5 col-md-10 paraCss" key={index}>
                                {element}
                            </p>
                        })}
                    </div>
                    <h2 className="ms-5 col-md-10 mt-5 mb-2 text-start" style={{ fontSize: "30px", fontWeight: "650", lineHeight: "40px" }}>
                        {props.heading2}
                    </h2>
                    <div className="mt-3 pt-3">
                        <p className="my-3 ms-5 col-md-10 paraCss">
                            {props.h2content2[0]}
                        </p>
                        <p className="my-3 ms-5 col-md-10 paraCss">
                            {props.h2content2[1]}
                        </p>
                        <iframe title="html frame" className="ms-5 col-md-10 col-10 text-start " src={props.htmlSrc} allowFullScreen={true} frameBorder="0" width={"100%"} height={"500"}></iframe>
                        <p className="my-3 ms-5 col-md-10 paraCss">
                            {props.h2content2[2]}
                        </p>
                        <iframe title="css frame" className="ms-5 col-md-10 col-10 text-start " src={props.cssSrc} allowFullScreen={true} frameBorder="0" width={"100%"} height={"500"}></iframe>
                        <p className="my-3 ms-5 col-md-10 paraCss">
                            {props.h2content2[3]}
                        </p>
                        <iframe title="js frame" className="ms-5 col-md-10 col-10 text-start " src={props.jsSrc} allowFullScreen={true} frameBorder="0" width={"100%"} height={"500"}></iframe>
                        <p className="my-3 ms-5 col-md-10 paraCss">
                            {props.h2content2[4]}
                        </p>
                    </div>
                    <div className="col-md-6 text-center mx-auto ">
                        <button type="submit" onClick={scroll()} className="btn btn-dark " style={{ borderRadius: "10px", fontSize: "24px", fontWeight: "500" }}> <i className="fa fa-download" style={{ fontSize: "24px", backgroundColor: "rgb(28, 31, 35)", color: "white" }}></i><a href={props.downloadLink} rel="noreferrer" target={"_blank"} style={{ color: "white", textDecoration: "none" }}>Download Code Files</a></button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Articles;