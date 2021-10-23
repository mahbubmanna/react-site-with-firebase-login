import React from 'react';
import CopyrightYear from 'react-copyright-year';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer bg-light pt-8 pb-3 w-full">
            <h3 className="text-2xl text-primary font-bold">Smile Dentistry</h3>
            <p>25 Lake Michigan Dr NW # C, Grand Rapids, MI 49504, United States</p>
            <p>Phone: 75860155254 Email: info@smiledentistry.com</p>

            <br />
            <p><CopyrightYear /> Smile Dentistry</p>
        </div>
    );
};

export default Footer;