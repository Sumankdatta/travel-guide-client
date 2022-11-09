import React from 'react';
import logo from '../../assets/logo'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
        <div>
          <img width="50" height="50" src={logo} alt="" />
          <p className="font-bold">
            <span className='text-2xl'>Swanky Travel</span>. <br/>Providing reliable tech since 1992
          </p> 
          <p>Copyright © 2023 - All right reserved</p>
        </div> 
        <div>
        
        </div>
      </footer>
    );
};

export default Footer;