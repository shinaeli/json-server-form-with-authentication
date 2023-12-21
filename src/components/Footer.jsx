import React from 'react'
import { services } from '../services'

const Footer = () => {
  return (
    <div className='footer-container'>
        <h1 className="footer-title">OUR SERVICES</h1>
        <div className="services">{services.map(service => {
            return (
                <div key={service.id} className="service-container">
                    <div className="icon">
                        <img src={service.icon} alt={service.alt} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-text">{service.text}</p>
                </div>
            )
        })}</div>
        <p className="copyright">&copy;2023. Made by Omotosho E. Oluwasina.</p>
    </div>
  )
}

export default Footer