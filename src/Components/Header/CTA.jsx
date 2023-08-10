// cta means CALL TO ACTION

import React from 'react'
import { Link } from 'react-scroll'
import CV from "../../assets/CV.pdf"

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <Link to="contact" className='btn btn-primary'>Let's Talk</Link>
    </div>
  )
}

export default CTA
