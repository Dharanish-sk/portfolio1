import React from 'react'
import './About.css'
import profile from '../../assets/wprofile.png'
import theme from '../../assets/logo1.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="a-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} style={{background:"white"}} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an experienced Frontend Developer </p>
          <p>My passion for Frontend Development is not only in </p>
          </div>
          <div className="about-skills">
          <div className="about-skill">
            <p>HTML & CSS</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill">
            <p>React Js</p><hr style={{width:"100%"}}/></div>
              <div className="about-skill">
            <p>JavaScript</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill">
            <p>Next Js</p><hr style={{width:"40%"}}/></div>
            </div>
        </div>
      </div>
      <div className="achivements">
        <div className="achivement">
          <h1>Fresher</h1>
          
        </div>
        <hr />
        <div className="achivement">
          <h1>2+</h1>
          <p> Projects</p>
        </div><hr />
        <div className="achivement">
          <h1>1 +</h1>
          <p>  Happy customers</p>
        </div>

      </div>
    </div>
  )
}

export default About
