
import './Navbar.css'
// import logo from '../../assets/logo14.png'
import { useRef, useState } from 'react'
import line from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuo from '../../assets/menu_open.svg'
import menuc from '../../assets/menu_close.svg'
const Navbar = () => {

  const [menu,setMenu] =useState("home")
const menuRef = useRef();

const openMenu = ()=>{
  menuRef.current.style.right="0px";
}
const closeMenu = ()=>{
  menuRef.current.style.right="-350px";
}
  return (
  
    <div className='nav'>
      {/* <img className="nav-logo"src={logo} alt="" /> */}
      <img src={menuo} onClick={openMenu} className='nav-open' alt="" />
      <ul ref={menuRef}  className="nav-menu">
        <img src={menuc} alt="" onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={line} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={line} alt=""/>:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={line} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={line} alt=""/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={line} alt=""/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
