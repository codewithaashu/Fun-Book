import React from "react";
const CoursesPg = (props) => {
    return (
        <>
            <div className="container pt-3 mb-5 py-3">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1 style={{ fontSize: "36px", fontWeight: "700", lineHeight: "40px", paddingBottom: "5px" }}>
                            {props.heading1}
                        </h1>
                        <p style={{ color: "rgb(75, 85, 99)", fontSize: "16px", fontWeight: "400", lineHeight: "24px" }}>
                            {`Published ${props.publishedAt}`}
                        </p>
                        <div className="mt-4">
                            {props.content1.map(function (element, index) {
                                return <p className="mt-2" key={index}>
                                    {element}
                                </p>
                            })}
                        </div>
                        <h1 style={{ fontSize: "30px", fontWeight: "600", lineHeight: "36px", marginTop: "35px", paddingBottom: "3px" }}>
                            {props.heading2}
                        </h1>
                        {props.content2.map(function (element, index) {
                            return <p className="mt-2" key={index}>
                                {element}
                            </p>
                        })}
                        <h1 style={{ fontSize: "30px", fontWeight: "600", lineHeight: "36px", marginTop: "35px", paddingBottom: "3px" }}>
                            {props.heading3}
                        </h1>
                        {props.content3.map(function (element, index) {
                            return <p className="mt-2 mx-3" key={index}>
                                &#9679;  {element}
                            </p>
                        })}
                        <h1 style={{ fontSize: "30px", fontWeight: "600", lineHeight: "36px", marginTop: "20px", paddingBottom: "5px" }}>
                            {props.heading4}
                        </h1>
                         <p className="mt-2">
                                {props.content4}
                         </p>
                         <h1 style={{ fontSize: "30px", fontWeight: "600", lineHeight: "36px", marginTop: "30px", paddingBottom: "8px" }}>
                            {props.heading6}
                        </h1>
                        <p className="mt-2 mx-1" style={{fontSize:"18px"}}>
                            {props.link1} <a href={props.link1Url} target={"_blank"} rel="noreferrer" style={{color:"rgb(76, 29, 149)",fontWeight:"bold"}}>Click Here</a>
                         </p>
                        <p className="mt-2 mx-1" style={{fontSize:"18px"}}>
                            {props.link2} <a href={props.link2Url} target ={"_blank"} rel="noreferrer" style={{color:"rgb(76, 29, 149)",fontWeight:"bold"}}>Click Here</a>
                         </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CoursesPg;