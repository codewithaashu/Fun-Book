import React from "react";
import { NavLink} from "react-router-dom";
import Post from './Post';
import Data from "./Data";
const Home = (props) => {
    document.title="Home | CodeWithAashu";
    const scroll = () => {
        if (window.scrollY) {
            window.scroll(0,0)
        }
    }
    return (
        <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto col-10 pt-4">
                            <h1 className="welcome mqCenter">
                                Welcome to
                                <span className="text-center " style={{ color: "rgb(79, 70, 229)" }}> CodeWithAashu</span>
                            </h1>
                            <p className="mqCenter para me-5 col-md-8">
                                Code that communicates its purpose is very important. I often refactor just when I’m reading some code. That way, as I gain understanding about the program, I embed that understanding into the code for later so I don’t forget what I learned.
                            </p>
                            {/* <br /> */}
                            <div className="my-auto mb-5 mqCenter">
                                <NavLink to="/freeCourses" onClick={scroll} className="btn btn-primary gap" role="button">Free Courses </NavLink>
                                <NavLink to="/blog" onClick={scroll} className="btn btn-danger gap" role="button">&nbsp;Blog&nbsp;</NavLink>
                            </div>
                        </div>
                        <div className="col-md-5" id="background">
                        </div>
                    </div>
                </div>
            <div className="container body">
                <div className="row justify-content-md-center">
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12">
                        <h1 className="recommended" style={{fontWeight:"550"}}>
                            Recommended Posts
                        </h1>
                    </div>
                </div>
                <div className="row col-md-12 col-12  mx-auto">
                     <div className="col-md-4 mx-auto rad">
                        <Post img={Data[5].imgsrc} link={Data[5].link} title={Data[5].title} content={Data[5].content}/>
                        </div>
                     <div className="col-md-4 mx-auto rad">
                        <Post img={Data[2].imgsrc} link={Data[2].link} title={Data[2].title} content={Data[2].content}/>
                        </div>
                     <div className="col-md-4 mx-auto rad">
                        <Post img={Data[4].imgsrc} link={Data[4].link} title={Data[4].title} content={Data[4].content}/>
                        </div>
                </div>
                </div>
        </>
    )
}
export default Home; //for further use
//Data is an array . map function is used to iterate the element till the end of element.