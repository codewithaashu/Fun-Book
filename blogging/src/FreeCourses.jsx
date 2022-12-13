import React from "react";
import Card from "./Card";
import CourseData from "./CourseData";
const FreeCourses = ()=>{
    document.title="FreeCourses | CodeWithAashu";
    return(
        <>
        {CourseData.map(function(element,index){
            return <div className="card col-md-8 shadow ps-4 p-3 mb-4 bg-body rounded mx-5" key={index}>
                    <Card date={element.date} title={element.title}  content={element.content} link={element.link}/>
            </div>
        })}
        </>
    )
}
export default FreeCourses;