import './App.css';
import LoadingBar from 'react-top-loading-bar'
//loading bar ke package ko install krna hoga npm install --save react-top-loading-bar

//react component based js framework hn. ye component function based ya classes based component. website ko component ke rup me divide krti hn aur jisse manaage krna aur reuse krna kaafi easy hota hn.
//hum yha classes based component discuss krenge--> rcc(react classes component)
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import NewsContainer from './component/NewsContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Spinner from './component/Spinner';
//path exact match ho islye hum exact keyword ka use krte hn
//Router jb switch krne jayegi tb dekhegi ye to same hi hn  islye switch ni kr payegi. islye unique key de kr different krna hoga

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API
  apiKey = "437d42d85a7d45ab85945d92b2b88bc2"
  page =6
  state ={
    progress :0
  }
  setProgress =(progress)=>
  {
    this.setState({
      progress:progress
    })
    //hum state ko ek function ke through set krte hn.
  }
  render() {
    return (
      <div>
      <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height ={5}
        progress={this.state.progress}//hum progress bar ko continously change krenge
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <Spinner/> */}

        <Switch>
          <Route exact path="/entertainment">
            <NewsContainer key ="entertainment" apiKey ={this.apiKey} pageSize ={this.page} category="Entertainment" setProgress ={this.setProgress} />
          </Route>
          <Route exact path="/business">
            <NewsContainer key ="business" apiKey ={this.apiKey} pageSize ={this.page} category="Business" setProgress ={this.setProgress}/>
          </Route>
          <Route exact path="/science">
            <NewsContainer key ="science" apiKey ={this.apiKey} pageSize ={this.page} category="Science" setProgress ={this.setProgress} />
          </Route>
          <Route exact path="/technology">
            <NewsContainer key ="technology" apiKey ={this.apiKey} pageSize ={this.page} category="Technology"  setProgress ={this.setProgress} />
          </Route>
          <Route exact path="/health">
            <NewsContainer key ="health" apiKey ={this.apiKey} pageSize ={this.page} category="Health" setProgress ={this.setProgress} />
          </Route>
          <Route exact path="/sports">
            <NewsContainer key ="sports" apiKey ={this.apiKey} pageSize ={this.page} category="Sports" setProgress ={this.setProgress} />
          </Route>
          <Route exact path="/">
            <NewsContainer key ="general" apiKey ={this.apiKey} pageSize ={this.page} category="General" setProgress ={this.setProgress} />
          </Route>
        </Switch>
        
      </Router>
      </div>
    )
  }
}
