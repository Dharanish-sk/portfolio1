import './Hero.css'
import profile from '../../assets/wprofile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div  id='hero' className='hero'>
        <img src={profile} alt="" />
        <h1><span>Hi Im Dharanish,</span> frontend developer based in INDIA.</h1>
      <p>I am a frontend developer from coimbatore</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero;
