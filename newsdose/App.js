import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey = "486f7454ba274b5891b72e6861a67353"
  pageSize = 5
  state={
    color: "rgba(255,255,255,.75)",
    backgroundColor: "#343a40",
    progress :0
  }
  toggleMode = () => {
    if (this.state.color === "white") {
      this.setState({ color: "rgba(255,255,255,.75)", backgroundColor: "#343a40" })
      document.body.style.backgroundColor = "white"
    }
    else {
      this.setState({ color: "white", backgroundColor: "black" })
      document.body.style.backgroundColor = "#042743"
    }
  }
  setProgress = (progress)=>
  {
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar toggleMode={this.toggleMode} state={this.state}/>
          <LoadingBar
        color='#f11946'
        height = {4}
        progress={this.state.progress}
      />
          <Switch>
            <Route exact path="/sports">
              <News key = "sports" state={this.state} apiKey={this.apiKey} pageSize={this.pageSize} category="Sports" setProgress={this.setProgress}/>
            </Route>
            <Route exact path="/health">
              <News key = "health" state={this.state} apiKey={this.apiKey} pageSize={this.pageSize} category="Health" setProgress={this.setProgress} />
            </Route>
            <Route exact path="/entertainment">
              <News key = "entertainment" state={this.state} apiKey={this.apiKey} pageSize={this.pageSize} category="Entertainment" setProgress={this.setProgress} />
            </Route>
            <Route exact path="/technology">
              <News key = "technology" state={this.state} apiKey={this.apiKey} pageSize={this.pageSize} category="Technology" setProgress={this.setProgress}/>
            </Route>
            <Route exact path="/science">
              <News key = "science" state={this.state} apiKey={this.apiKey} pageSize={this.pageSize} category="Science" setProgress={this.setProgress}/>
            </Route>
            <Route exact path="/business">
              <News key ="business" state={this.state} apiKey={this.apiKey} pageSize={this.pageSize} category="Business" setProgress={this.setProgress}/>
            </Route>
            <Route exact path="/">
            <News key ="general" state={this.state} apiKey ={this.apiKey} pageSize ={this.page} category="General" setProgress ={this.setProgress} />
          </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
