import React from 'react';

const ThanksPage = () => {
    // Redirecting to another page
    const redirectToHomePage = () => {
        window.location.href = '/'; // Redirect to the home page
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-lg">We appreciate your business. Your order has been successfully submitted.</p>
            <p className="text-lg">We will contact you shortly for further details.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={redirectToHomePage}>
                Return to Home Page
            </button>
        </div>
    );
};

export default ThanksPage;
