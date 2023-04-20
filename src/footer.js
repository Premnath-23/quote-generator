import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links"> 
        <h3>My Github:</h3>
        <a href="https://github.com/Premnath-23"><FaGithub /></a> &nbsp; &nbsp; &nbsp; &nbsp;
        <h3>Mail me: </h3>
        <a href= "mailto:myemailaddress"><FaEnvelope /></a>
        <h4><i>&nbsp; &nbsp; &nbsp;  &nbsp;Contact address: No.23, SGPN nagar, Tamil home, Coimbatore-05.</i></h4>
        <p>
          <h4> &nbsp; &nbsp; &nbsp;  &nbsp;For website enquiry: 9000000923</h4>
        </p>
      </div>
    </footer>
  );
}



export default Footer;