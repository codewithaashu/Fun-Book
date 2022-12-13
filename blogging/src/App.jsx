import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import FreeCourses from './FreeCourses';
import Navbar from './Navbar';
import Footer from './Footer';
import Articles from './Articles';
import PostData from './PostData';
import CoursesPg from './CoursesPg';
import coursesPgData from './coursesPgData';
const App =()=>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path = "/" component = {Home}/>
      <Route exact path = "/blog" component ={Blog}/>
      <Route exact path = "/FreeCourses" component = {FreeCourses}/>
      <Route exact path = "/contact" component ={Contact}/>
      <Route exact path = "/blog/post0" component = {Articles}>
        <Articles heading1 ={PostData[0].heading1} publishedAt={PostData[0].publishedAt} imgsrc={PostData[0].imgsrc} h1content1={PostData[0].h1content1} heading2={PostData[0].heading2} h2content2={PostData[0].h2content2} htmlSrc={PostData[0].htmlSrc} cssSrc={PostData[0].cssSrc} jsSrc={PostData[0].jsSrc} downloadLink={PostData[0].downloadLink}/>
      </Route>
      <Route exact path = "/blog/post1" component = {Articles}>
        <Articles heading1 ={PostData[1].heading1} publishedAt={PostData[1].publishedAt} imgsrc={PostData[1].imgsrc} h1content1={PostData[1].h1content1} heading2={PostData[1].heading2} h2content2={PostData[1].h2content2} htmlSrc={PostData[1].htmlSrc} cssSrc={PostData[1].cssSrc} jsSrc={PostData[1].jsSrc} downloadLink={PostData[1].downloadLink}/>
      </Route>
      <Route exact path = "/blog/post2" component = {Articles}>
        <Articles heading1 ={PostData[2].heading1} publishedAt={PostData[2].publishedAt} imgsrc={PostData[2].imgsrc} h1content1={PostData[2].h1content1} heading2={PostData[2].heading2} h2content2={PostData[2].h2content2} htmlSrc={PostData[2].htmlSrc} cssSrc={PostData[2].cssSrc} jsSrc={PostData[2].jsSrc} downloadLink={PostData[2].downloadLink}/>
      </Route>
      <Route exact path = "/blog/post3" component = {Articles}>
        <Articles heading1 ={PostData[3].heading1} publishedAt={PostData[3].publishedAt} imgsrc={PostData[3].imgsrc} h1content1={PostData[3].h1content1} heading2={PostData[3].heading2} h2content2={PostData[3].h2content2} htmlSrc={PostData[3].htmlSrc} cssSrc={PostData[3].cssSrc} jsSrc={PostData[3].jsSrc} downloadLink={PostData[3].downloadLink}/>
      </Route>
      <Route exact path = "/blog/post4" component = {Articles}>
        <Articles heading1 ={PostData[4].heading1} publishedAt={PostData[4].publishedAt} imgsrc={PostData[4].imgsrc} h1content1={PostData[4].h1content1} heading2={PostData[4].heading2} h2content2={PostData[4].h2content2} htmlSrc={PostData[4].htmlSrc} cssSrc={PostData[4].cssSrc} jsSrc={PostData[4].jsSrc} downloadLink={PostData[4].downloadLink}/>
      </Route>
      <Route exact path = "/blog/post5" component = {Articles}>
        <Articles heading1 ={PostData[5].heading1} publishedAt={PostData[5].publishedAt} imgsrc={PostData[5].imgsrc} h1content1={PostData[5].h1content1} heading2={PostData[5].heading2} h2content2={PostData[5].h2content2} htmlSrc={PostData[5].htmlSrc} cssSrc={PostData[5].cssSrc} jsSrc={PostData[5].jsSrc} downloadLink={PostData[5].downloadLink}/>
      </Route>
      <Route exact path ="/freeCourses/post0" component ={CoursesPg}>
        <CoursesPg heading1 ={coursesPgData[0].heading1} publishedAt={coursesPgData[0].publishedAt} content1={coursesPgData[0].content1} heading2={coursesPgData[0].heading2} content2 ={coursesPgData[0].content2} heading3={coursesPgData[0].heading3} content3 ={coursesPgData[0].content3} heading4={coursesPgData[0].heading4} content4 ={coursesPgData[0].content4} heading6={coursesPgData[0].heading6} link1={coursesPgData[0].link1}  link1Url={coursesPgData[0].link1Url} link2={coursesPgData[0].link2} link2Url={coursesPgData[0].link2Url}/>
      </Route>
      <Route exact path ="/freeCourses/post1" component ={CoursesPg}>
        <CoursesPg heading1 ={coursesPgData[1].heading1} publishedAt={coursesPgData[1].publishedAt} content1={coursesPgData[1].content1} heading2={coursesPgData[1].heading2} content2 ={coursesPgData[1].content2} heading3={coursesPgData[1].heading3} content3 ={coursesPgData[1].content3} heading4={coursesPgData[1].heading4} content4 ={coursesPgData[1].content4} heading6={coursesPgData[1].heading6} link1={coursesPgData[1].link1}  link1Url={coursesPgData[1].link1Url} link2={coursesPgData[1].link2} link2Url={coursesPgData[1].link2Url}/>
      </Route>
      <Route exact path ="/freeCourses/post2" component ={CoursesPg}>
        <CoursesPg heading1 ={coursesPgData[2].heading1} publishedAt={coursesPgData[2].publishedAt} content1={coursesPgData[2].content1} heading2={coursesPgData[2].heading2} content2 ={coursesPgData[2].content2} heading3={coursesPgData[2].heading3} content3 ={coursesPgData[2].content3} heading4={coursesPgData[2].heading4} content4 ={coursesPgData[2].content4} heading6={coursesPgData[2].heading6} link1={coursesPgData[2].link1}  link1Url={coursesPgData[2].link1Url} link2={coursesPgData[2].link2} link2Url={coursesPgData[2].link2Url}/>
      </Route>
      <Route exact path ="/freeCourses/post3" component ={CoursesPg}>
        <CoursesPg heading1 ={coursesPgData[3].heading1} publishedAt={coursesPgData[3].publishedAt} content1={coursesPgData[3].content1} heading2={coursesPgData[3].heading2} content2 ={coursesPgData[3].content2} heading3={coursesPgData[3].heading3} content3 ={coursesPgData[3].content3} heading4={coursesPgData[3].heading4} content4 ={coursesPgData[3].content4} heading6={coursesPgData[3].heading6} link1={coursesPgData[3].link1}  link1Url={coursesPgData[3].link1Url} link2={coursesPgData[3].link2} link2Url={coursesPgData[3].link2Url}/>
      </Route>
      <Redirect to = "/"/>
    </Switch>
    <Footer/>
    </>
  )
}
export default App;

//agar kisi ne home url daala to home page render ho . agar kisi ne about daala to about page render ho . islye hum switch use krte route ke through condition daalenge. agar kisi ne ye path daala to ye component render ho jaye.
//agar kisi ne glt daala hn to redirect ho jaye home page pe
//Switch multiple page se ek page ko dikhata hn jo pehle match ho gya hn. islye hum exact path use krte hn.

/* const App =()=>{
  return(
    <>
      <h1>
        I love India
      </h1>
      <Home/>
    </>
  );
}; */