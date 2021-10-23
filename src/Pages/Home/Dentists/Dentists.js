import React, { useEffect, useState } from 'react';
import Dentist from '../Dentist/Dentist';

const Dentists = () => {
    const [dentists, setDentists] = useState([])
    useEffect(() => {
        fetch('/data/dentists.json')
            .then(res => res.json())
            .then(data => setDentists(data));
    }, [])

    return (
        <div id="dentists">
            <h2 className="mb-4 mt-5 py-3 bg-light text-warning">Meet Our Dentists</h2>
            <div className="container dentists-container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 mb-4">
                    {
                        dentists.map(dentist => <Dentist
                            key={dentist.id}
                            dentist={dentist}
                        ></Dentist>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Dentists;