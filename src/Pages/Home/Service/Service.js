import React from 'react';
import { Link } from 'react-router-dom';
// import './Service.css';

const Service = (props) => {
    const { id, name, info, img } = props.service;

    const url = `service/${id}`;

    return (
        <div className="service col text-dark">
            <div className="card h-100">
                <img className="w-100" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{info}</p>
                </div>
                <div className="card-footer">
                    <Link to={url}>
                        <button className=" btn btn-white bg-warning  text-dark font-weight-bold rounded-pill">See Details/Book</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;