import React from 'react';

const NotFound = () => {
    return (
        <div className="error">
            <div className="featured w-11/12 mx-auto bg-green-100 rounded-2xl p-4 mb-10 h-screen flex justify-center items-center">
                <div className="w-1/2 mx-auto h-1/2">
                    <h1 className="text-5xl font-bold">Error 404!</h1>
                    <h3 className="text-2xl font-bold ">Page Not Found!</h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;