import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Job from '../components/job';

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/jobs", {
            withCredentials: true,
        })
            .then(res => {
                console.log(res.data);
                setJobs(res.data)
            })
    }, [])
    return (
        <div>
            ALL JOBS
            {
                jobs.map(job => <Job key={job._id} job={job} />)
            }
        </div>
    );
};

export default Jobs;