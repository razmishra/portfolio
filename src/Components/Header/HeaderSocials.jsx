import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/rajneesh1m/" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/razmishra" target='_blank'><BsGithub  /></a>
      <a href="https://www.instagram.com/_rajneesh_mishra7/" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
