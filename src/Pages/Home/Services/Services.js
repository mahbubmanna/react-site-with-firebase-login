import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    // console.log(services);

    return (
        <div id="services">
            <h2 className="mb-4 mt-5 py-3 bg-light text-warning">Our Services</h2>
            <div className="container services-container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 mb-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;