import React from 'react'
import theme from '../../assets/theme_pattern.svg'
import data from '../../assets/mywork_data'
import mywork_data from '../../assets/mywork_data'
import arrow from '../../assets/arrow_icon.svg'
import './MyWork.css'



const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="my-title">
        <h1>My latest MyWork</h1>
        <img src={theme} alt="" />
      </div>
      <div className="my-con">
      {mywork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt="" />
      })}</div>
      <div className="my-showmore">
        <p>Show more</p>
        <img src={arrow} alt="" />
      </div>
    </div>
  )
}

export default MyWork
