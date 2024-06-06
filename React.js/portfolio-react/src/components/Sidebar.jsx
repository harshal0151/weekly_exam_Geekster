import React from 'react'
import "../components/sidebar.css"
import profileImg from "../assets/profile.jpg"
import webIcon from "../assets/icon-dev.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Sidebar = () => {
  return (
   <>
   <section>
      <div className='profile_img'>
        <img src= {profileImg} alt="" />
        <h3>harshal Patil</h3>
      </div>

      <div className='profile_contend'>
         <div className='con_card'>

         <div>
         <img src={webIcon} alt="/" />
         </div>
         <div>
          <span>Age</span>
          <p>29 years old</p>
         </div>

         </div>

         <div className='con_card'>

         <div>
         <img src={webIcon} alt="/" />
         </div>
         <div>
          <span>Location</span>
          <p>Dhule, Maharashtra</p>
         </div>

         </div>

         <div className='con_card'>

         <div>
         <img src={webIcon} alt="/" />
         </div>
         <div className='con-det'>
          <span>Age</span>
          <p>29 years old</p>
         </div>
         </div>

         
         <div className='socials'>
         <FontAwesomeIcon icon="fa-brands fa-linkedin" />
         </div>
      </div>

   </section>
   </>
  )
}

export default Sidebar