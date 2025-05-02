import React from 'react';

const Job = ({ job }) => {
    return (
        <div style={{ border: '2px solid green', padding: "10px", margin: '10px' }}>
            <h1>{job.title}</h1>
            <h1>{job.location}</h1>
            <h1>{job.jobType}</h1>
            <h1>{job.category}</h1>
        </div>
    );
};

export default Job;