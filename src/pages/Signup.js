import React from "react";
import "./Signup.css";
import { BsPersonFill, BsLockFill, BsArrowRight } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
function Signup() {
  return (
    <motion.form
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='signup-form'
  >
  <div className="form-container-signup">
    <div className="form-header-signup">
      <h2>Create an account</h2>
    </div>
    <div className="form-body-signup">
      <div className="form-group-signup">
        <label htmlFor="name">Full Name</label>
        <div className="input-signup">
          <span className="icon-signup">
            <BsPersonFill />
          </span>
          <input type="text" name="name" placeholder="Enter your full name" required />
        </div>
      </div>
      <div className="form-group-signup">
        <label htmlFor="email">Email Address</label>
        <div className="input-signup">
          <span className="icon-signup">
            <FaEnvelope />
          </span>
          <input type="email" name="email" placeholder="Enter your email address" required />
        </div>
      </div>
      <div className="form-group-signup">
        <label htmlFor="password">Password</label>
        <div className="input-signup">
          <span className="icon-signup">
            <BsLockFill />
          </span>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>
      </div>
    </div>
    <div className="form-footer">
      <button>
        Sign Up
        <span className="icon-signup">
        <BsArrowRight />
        </span>
      </button>
    </div>
    
    </div>
  </motion.form>
);
};

export default Signup;
