import React from 'react';

const ConfirmBooking = () => {
    return (
        <div className="confirm-booking">
            <div className="mx-auto bg-light rounded p-5 m-5 d-flex justify-content-center align-items-center">
                <div className="w-50 mx-auto h-50">
                    <h1 className="fw-bold text-primary">Thank You</h1>
                    <h3 className="fw-bold">Your Booking request is successfully submitted</h3>
                    <br />
                    <h5 className="text-primary">We will confirm your booking through your given email address. We may contact you before your booking confirmation if necessary.</h5>
                </div>
            </div>
        </div>
    );
};

export default ConfirmBooking;