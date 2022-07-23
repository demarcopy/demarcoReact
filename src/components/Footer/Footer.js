import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';  
import {faGoogle,faTwitter } from '@fortawesome/free-brands-svg-icons';

const  Footer = () => {
  return (
    <footer className='Footer'>
    <div className='redes' >
      <span>Nuestras redes sociales</span>
    </div>
    <div className='brands'>
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faGoogle} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faGithub} />
    </div>
    </footer>
  )
}
export default Footer;