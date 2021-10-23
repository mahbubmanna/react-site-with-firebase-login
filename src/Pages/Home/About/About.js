import React from 'react';
// import './About.css'

const About = () => {
    return (
        <div className="about container mt-5">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <img className=" px-3 w-100" src="https://image.freepik.com/free-vector/flat-dental-care-concept-with-dentist-patient_23-2148983356.jpg" alt="" />
                </div>

                <div className="col about-text px-3 my-3 pt-5">
                    <h5>Our practice is designed to deliver advanced restorative, cosmetic and neuromuscular dentistry to correct, restore and enhance your smile. </h5>
                    <br />
                    <p>For your comfort, we have carefully designed our practice to achieve this kind of dental care in an atmosphere of efficiency, warmth and understated elegance. In this comfortable setting your goals are carefully discussed so that we can integrate esthetics as part of total dental health creating an overall pleasing and natural facial appearance unique to your facial form.</p>
                </div>
            </div>
        </div>
    );
};

export default About;