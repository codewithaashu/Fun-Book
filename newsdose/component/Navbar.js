import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top" style={this.props.state}>
                    <div className="container-fluid" >
                        <a className="navbar-brand" style={this.props.state} href="/">NewsDose</a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/">Home</Link>
                                </li>                          
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/sports">Sports</Link>
                                </li>                          
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/entertainment">Entertainment</Link>
                                </li>                          
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/health">Health</Link>
                                </li>                          
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/business">Business</Link>
                                </li>                          
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/science">Science</Link>
                                </li>                          
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" style={this.props.state}  to="/technology">Technology</Link>
                                </li>                          
                            </ul>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" onClick={this.props.toggleMode} id="flexSwitchCheckDefault"/>
                                <label className ="form-check-label" htmlFor="flexSwitchCheckDefault" style={this.props.state}>Enable Dark Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
