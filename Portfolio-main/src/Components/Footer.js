import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Bhaskar S</h4>
      <h4>Copyright &copy; 2024 BS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/bhaskar-0819" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/bhaskar-s-6828552b6/" target='_blank'><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer