import React from "react";
import Data from "./Data";
import Post from './Post';
const Blog=()=>{
    document.title="Blog | CodeWithAashu";
    return(
        <>
        <div className="container body mx-auto my-5">
        <div className="row col-md-12 col-12 mx-auto">
                    {Data.map(function (element,index){
                    return <div className="col-md-4 mx-auto rad" key={index}>
                         <Post img={element.imgsrc} link={element.link} title={element.title} content={element.content}/>
                        </div>
                    })}
                </div>
                </div>
        </>
    )
}
export default Blog;