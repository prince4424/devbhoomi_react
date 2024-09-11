import React from 'react';

// Sample data for team members
const teamMembers = [
    {
        name: "SANJAY",
        title: "Chairman",
        imgSrc: "/assets/images/sanjay.jpg"
    },
    {
        name: "Narendra Singh",
        title: "Vice Chairman",
        imgSrc: "/assets/images/agent_narender.jpg"
    },
    {
        name: "Mandeep Kaur",
        title: "Associate Member",
        imgSrc: "/assets/images/agent_kaur.jpg"
    },
];

function OurTeam() {
    return (
        <div className="container text-center mt-5">
            <h1 className="mb-5">Meet the Team</h1>
            <div className="row">
                {teamMembers.map(member => (
                    <div key={member.name} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={member.imgSrc} className="card-img-top rounded-circle mx-auto mt-4" style={{ width: 150, height: 150, objectFit: 'cover' }} alt={member.name} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{member.name}</h5>
                                <p className="card-text text-center">{member.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
