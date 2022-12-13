import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const scroll1=()=>{
    window.scrollTo(0,0)
  }
  const scroll2=()=>{
    window.scrollTo(0,0)
  }
  const scroll3=()=>{
    window.scrollTo(0,0)
  }
  const scroll4=()=>{
    window.scrollTo(0,0)
  }
  return (
    <>
      <div className="container-fluid nav-bg mb-5 sticky-top" >
        <div className="row">
          <div className="col-md-10 mx-auto " ></div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid py-3">
              <NavLink className="navbar-brand mx-auto " to="/" style={{ color: "rgb(91, 33, 182)" }}>CodeWithAashu</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent" >
                <ul className="navbar-nav mr-50 mb-2 mb-lg-0 " id="secondProblem" >
                  <li className="nav-item focus">
                    <NavLink exact className="nav-link " activeClassName="menu_active" onClick={scroll1} to="/">Home</NavLink>
                  </li>
                  <li className="nav-item focus">
                    <NavLink className="nav-link" onClick={scroll2} activeClassName="menu_active" to="/blog">Blog</NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link " activeClassName="menu_active" onClick={scroll3} to="/freeCourses">Free Courses</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" onClick={scroll4} to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Navbar;