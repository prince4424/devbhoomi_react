import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function Contact() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Serialize form data
        const formData = new FormData(e.target);

        fetch('https://formspree.io/f/mgvwqeep', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    setToastMessage('Form submitted successfully! Redirecting...');
                    setShowToast(true);
                    setTimeout(() => {
                        window.location.href = "https://devbhoomiestate.in/";
                    }, 3000); // Redirect after 3 seconds
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(() => {
                setToastMessage('There was a problem with your submission. Please try again.');
                setShowToast(true);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="contact-image">
                        <img src="/assets/images/contactpage.jpg" alt="Contact Us" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="contact-form">
                        <h2>Contact Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Enter your full name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Contact Number</label>
                                <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Type your message here" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={5000} autohide>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default Contact;
