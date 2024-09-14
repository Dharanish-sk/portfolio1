import React from 'react'
import profile from '../../assets/theme_pattern.svg'
import data from '../../assets/services_data';
import arrow from '../../assets/arrow_icon.svg'
import './Services.css'
const Services = () => {
  return (
    <div id='services' className="service">
       <div className="service-title">
        <h1>My Services</h1>
        <img src={profile} alt="" />
       </div>
       <div className="service-con">
        {data.map((service,index)=>{
          return <div key={index}className="service-format">
<h3>{service.s_no}</h3>
<h2>{service.s_name}</h2>
<p>{service.s_desc}</p>
<div className="service-readmore">
  <p>Read more</p>
<img src={arrow} alt="" />
</div>
          </div>
        })}
       </div>
    </div>
  )
}

export default Services
