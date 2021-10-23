import React from 'react';
import { Link } from 'react-router-dom';

const Dentist = (props) => {
    const { id, name, specialization, image } = props.dentist;

    const url = `dentist/${id}`;
    return (
        <div className="dentist col text-dark">
            <div className="card h-100">
                <img className="w-100" src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{specialization}</p>
                </div>
                <div className="card-footer">
                    <Link to={url}>
                        <button className=" btn btn-white bg-warning  text-dark font-weight-bold rounded-pill">Book an Appointment</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Dentist;