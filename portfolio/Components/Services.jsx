import React from 'react'
import ServiceDB from '../DataBase/ServicesDB';
import ServicesCard from './ServicesCard';
const Services = () => {
    return (
        <>
            <div className="services-main-div">
                <div className="container">
                    <div className="row services-div">
                        <p className='services-p'>
                            What I Do
                        </p>
                        <h1 className='services-h1'>
                            Services
                        </h1>
                    </div>
                    <div className="row mt-5 service-main-card">
                        {
                            ServiceDB.map((curElem,id)=>{
                                const {img,heading,contents} =curElem;
                                return(
                                    <ServicesCard key={id} img={img} heading={heading} contents={contents}/>
                                )
                            })
                        }
                        {/* <ServicesCard img={ServiceDB[0].img} heading ={ServiceDB[0].heading} contents ={ServiceDB[0].contents}/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services