import React from 'react';

const NotFound = () => {
    return (
        <div className="error">
            <div className="mx-auto bg-light rounded p-5 m-5 d-flex justify-content-center align-items-center" style={{ width: "90%" }}>
                <div className="w-50 mx-auto h-50">
                    <h1 className="fs-1 fw-bold">Error 404!</h1>
                    <h3 className="fs-1 fw-bold">Page Not Found!</h3>

                </div>
            </div>
        </div>
    );
};

export default NotFound;