import React from 'react'
import { Link } from 'react-router-dom'
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'

import './styles.css'

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h3>Fernanda Andrade</h3>
                <p>Programadora em construção</p>
            </div>
            <div className="redes">
                <img classname="git" src={Github} alt="Github"/>   
                <img className="in" src={Linkedin} alt="Linkedin"/>        
            </div>
        </div>
        
    )
  
    }

export default Footer
