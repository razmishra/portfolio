import React from 'react'
import {BiCheck} from "react-icons/bi"
import "./Services.css"
const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">

      
      <article className="service">
          <div className="service__head">
            <h3>Web Development </h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Frontend development</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Backend development</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>eCommerce solution</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Web Application Development</p>
            </li>
          </ul>
        </article>


        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Database & Infrastructure </h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Database design</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Database Optimization</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Database performance tuning</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Database migration</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Performance Optimization</p>
            </li>
          </ul>
        </article>

        {/* END OF Database and Infrastructure Services: */}


        <article className="service">
          <div className="service__head">
            <h3>Consultation and Support </h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Website Maintenance and Support</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Technical Consultation and Guidance</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>CI/CD Setup </p>
            </li>
          </ul>
        </article>

        {/* END OF Consultation and Support */}

      </div>
    </section>
  )
}

export default Services
