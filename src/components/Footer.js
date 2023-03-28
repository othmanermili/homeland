import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className="flex flex-col bg-black py-8 text-white text-center">
      <div>
        <p className='font-semibold text-3xl text-violet-500'>Contact us</p>
        <div className='flex flex-row items-center justify-center gap-x-4 my-4  '>
          <Link className="hover:text-gray-100 hover:font-bold transition duration-300">
            <div className="facebook-icon">
              <i className="fab fa-facebook-f"></i>
            </div>
          </Link>
          <Link className="hover:text-gray-100 hover:font-bold transition duration-300">
            <div className="instagram-icon">
              <i className="fab fa-instagram"></i>
            </div>
          </Link>
          <Link className="hover:text-gray-100 hover:font-bold transition duration-300">
            <div className="twitter-icon">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-gray-400">
        Copyright &copy; 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
