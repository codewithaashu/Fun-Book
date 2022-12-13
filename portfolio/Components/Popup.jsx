import React from 'react'
import check from '../quality.png';
import close from '../close.png';
const Popup = (props) => {
    return (
        <>
            {/* <div className="row pb-5 popup-main-div" style={{justifyContent:"center"}}> */}
            <div className="col-12 col-sm-4 col-md-4 col-lg-4 popupDiv">
                <div className="f-end pt-2">
                <img className='closeBtn' src={close} alt="check" onClick={props.toggle}/>
                </div>
                <h3 className='pt-4 ' style={{ textAlign: "center" }}>
                    {props.title}
                </h3>
                <p className='about-p pb-2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo odit perferendis sunt enim quaerat voluptas cumque debitis voluptatum quam repellat!
                </p>
                <ul>
                    <li className='skillsList'>
                        <span>
                            <img src={check} alt="check" style={{ width: "20px", color: "white" }} />
                            &nbsp; &nbsp;
                            <span style={{textAlign:"center"}}>
                            More than 10+ Project
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            {/* </div> */}
        </>
    )
}

export default Popup