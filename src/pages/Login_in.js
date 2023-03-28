import React from "react";
import './Login.css'
import { FaUser, FaLock  } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";


const login_in = () => {
    
  
    return (
      <motion.div
        className="login-form"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-container">
          <div className="form-header">
            <h2>Connexion</h2>
          </div>
          <form>
            <div className="form-body">
              <div className="form-group">
                <label htmlFor="username">Nom d'utilisateur</label>
                <div className="input-group">
                  <span className="icon">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Entrez votre nom d'utilisateur"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <div className="input-group">
                  <span className="icon">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Entrez votre mot de passe"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-footer">
              <button>
                Se connecter
                <span className="icon">
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    );
  }
  
  
  export default login_in;