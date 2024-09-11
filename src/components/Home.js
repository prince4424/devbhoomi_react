import React, { useState } from 'react';
import propertiesData from './propertiesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Carousel } from 'react-bootstrap';

function Home() {
    const [selectedProperties, setSelectedProperties] = useState([]);
    const [showPropertyDetails, setShowPropertyDetails] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [currentProperty, setCurrentProperty] = useState(null);
    const [currentLocation, setCurrentLocation] = useState('');
    const allLocations = ['Kharar', 'Mohali', 'Zirakpur', 'Lalru', 'Kurali', 'Roopnagar'];

    // Function to scroll to the properties section
    const scrollToProperties = () => {
        const propertiesSection = document.getElementById('propertiesSection');
        if (propertiesSection) {
            propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Function to handle location selection and show properties
    const handleLocationSelect = (location) => {
        const locationKey = `${location}Location`;
        if (propertiesData[locationKey] && propertiesData[locationKey].length > 0) {
            setSelectedProperties(propertiesData[locationKey]);
            setCurrentLocation(location);
            setShowComingSoon(false);
            setTimeout(scrollToProperties, 100); // Add a slight delay to ensure DOM is updated before scrolling
        } else {
            setSelectedProperties([]);
            setShowComingSoon(true);
            setCurrentLocation(location);
        }
    };

    // Function to handle property click and show details modal
    const handlePropertyClick = (property) => {
        setCurrentProperty(property);
        setShowPropertyDetails(true);
    };

    return (
        <div>
            <header className="hero-sec">
                <div className="container text-center my-5">
                    <h1>Welcome to Our Real Estate Projects</h1>
                    <p className="lead">Find your perfect home with us in Tricity Chandigarh, Mohali, and Kharar.</p>
                </div>
            </header>

            <section className="select-location">
                <div className="container text-center mb-5">
                    <h2>Select a Location</h2>
                    <div className="row">
                        {allLocations.map(location => (
                            <div key={location} className="col-md-4 mb-4">
                                <button className="btn btn-warning w-100" onClick={() => handleLocationSelect(location)}>
                                    {location.toUpperCase()}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProperties.length > 0 && (
                <section id="propertiesSection" className="container mb-5">
                    <h3 className="text-center mb-4">Properties in {currentLocation}</h3>
                    <div className="row">
                        {selectedProperties.map((property, index) => (
                            <div key={index} className="col-md-4 d-flex align-items-stretch" onClick={() => handlePropertyClick(property)}>
                                <div className="card mb-4">
                                    <img src={property.imgSrc[0]} className="card-img-top h-50 img-fluid" alt={property.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{property.title}</h5>
                                        <p className="card-text">{property.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <Modal show={showComingSoon} onHide={() => setShowComingSoon(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Coming Soon</Modal.Title>
                </Modal.Header>
                <Modal.Body>This project is coming soon. Stay tuned for updates!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowComingSoon(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showPropertyDetails} onHide={() => setShowPropertyDetails(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{currentProperty?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentProperty && (
                        <Carousel>
                            {currentProperty.imgSrc.map((img, idx) => (
                                <Carousel.Item key={idx}>
                                    <img className="d-block w-100" src={img} alt={`Slide ${idx + 1}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    )}
                    <ul className="list-group list-group-flush">
                        <li class="list-group-item "><strong>Plot starts from:</strong> ${currentProperty?.plotPrice}</li>
                        <li class="list-group-item "><strong>Plot Size:</strong> ${currentProperty?.plotsize}</li>
                        <li class="list-group-item "><strong>Flat price starts from:</strong> ${currentProperty?.flatPrice}</li>
                        <li class="list-group-item "><strong>Flat Size:</strong> ${property.flatSize}</li>
                        <li className="list-group-item">Location: <a href={currentProperty?.mapLink} target="_blank" rel="noopener noreferrer">{currentProperty?.location}</a></li>
                        <li className="list-group-item">Contact: {currentProperty?.contact}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPropertyDetails(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;
