import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons

function About() {
    return (
        <div className="container about-section mt-5">
            <h1 className="text-center mb-4">About Us</h1>
            <p className="about-intro text-center">
                At Devbhoomi Estate, we believe in making real estate transactions as transparent and straightforward as possible. With over 5 years in the industry, we’ve built a reputation for excellence in the Tricity area of Chandigarh, Mohali, and Kharar.
            </p>

            <h2 className="mb-4 text-center">Our History</h2>
            <p className="text-center">
                Since our founding in 2019, Devbhoomi Estate has expanded from a modest startup into a trusted partner for hundreds of clients. We've adapted through market changes and economic shifts, always maintaining our commitment to our clients' success.
            </p>

            <h2 className="mb-4 text-center">Our Services</h2>
            <ul className="list-unstyled text-center">
                <li>Residential Sales and Purchases</li>
                <li>Commercial Real Estate Services</li>
                <li>Property Management</li>
                <li>Real Estate Consultation</li>
            </ul>

            <h2 className="mb-4 text-center">Our Values</h2>
            <p className="text-center">
                We operate on principles of integrity, transparency, and dedication to client satisfaction. We believe these values set us apart in a competitive market.
            </p>

            <h2 className="mb-4 text-center">What Our Clients Say</h2>
            <div className="testimonials mb-5">
                <h3 className="text-center mb-4">Client Testimonials</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card testimonial-card">
                            <div className="card-body">
                                <blockquote className="blockquote">
                                    <p className="text-center">
                                        "Working with Devbhoomi Estate was a seamless experience. Their professionalism and dedication were evident throughout the process. I couldn't be happier with the outcome!"
                                    </p>
                                    <footer className="blockquote-footer">
                                        Ravinder Singh, <cite title="Source Title">Ambika Nagar</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card testimonial-card">
                            <div className="card-body">
                                <blockquote className="blockquote">
                                    <p className="text-center">
                                        "The team at Devbhoomi Estate went above and beyond to ensure our property purchase was smooth and stress-free. Highly recommended!"
                                    </p>
                                    <footer className="blockquote-footer">
                                        Arun Mittal, <cite title="Source Title">Devbhoomi Kurali</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card testimonial-card">
                            <div className="card-body">
                                <blockquote className="blockquote">
                                    <p className="text-center">
                                        "As first-time homebuyers, we were nervous about the process, but Devbhoomi Estate made everything understandable and comfortable. Thank you for helping us find our dream home!"
                                    </p>
                                    <footer className="blockquote-footer">
                                        Sukhwinder Gill, <cite title="Source Title">Phase 2 Kharar</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mb-4 text-center">Community Involvement</h2>
            <p className="text-center">
                We are proud to support various local causes and charities, helping to improve and give back to the communities where we work and live.
            </p>

            <h2 className="mb-4 text-center">Contact Us</h2>
            <p className="text-center">
                To learn more about our services or schedule a consultation, please contact us at:
            </p>
            <div className="contact-info mb-4 d-flex flex-row align-items-center justify-content-center text-center">
                <div className="d-flex align-items-center me-4">
                    <FaEnvelope className="contact-icon me-2" />
                    <a href="mailto:contact@devbhoomiestate.com" className="contact-link">
                        contact@devbhoomiestate.com
                    </a>
                </div>
                <div className="d-flex align-items-center">
                    <FaPhone className="contact-icon me-2" />
                    <a href="tel:8219672237" className="contact-link">
                        8219672237
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
