import React from 'react';

const ConfirmBooking = () => {
    return (
        <div className="confirm-booking">
            <div className="featured w-11/12 mx-auto bg-green-100 rounded-2xl p-4 mb-10 h-screen flex justify-center items-center">
                <div className="w-1/2 mx-auto h-1/2">
                    <h1 className="text-5xl font-bold text-primary">Thank You</h1>
                    <h3 className="text-2xl font-bold ">Your Booking request is successfully submitted</h3>
                    <br />
                    <h5 className="text-primary">We will confirm your booking through your given email address. We may contact you before your booking confirmation if necessary.</h5>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBooking;