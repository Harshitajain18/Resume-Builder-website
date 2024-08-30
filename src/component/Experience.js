import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Experience.css';
import Stepper from './Stepper';

function Experience() {
    const initialValues = { Company: "", JobTitle: "", Duration: "", Point: "" };
    
    const [jobs, setJobs] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem('jobdata'));
        return Array.isArray(savedData) ? savedData : [initialValues];
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('jobdata'));
        if (Array.isArray(savedData)) {
            setJobs(savedData);
        }
    }, []);

    const addJob = () => {
        setJobs([...jobs, { ...initialValues }]);
    };

    const removeJob = (index) => {
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
    };

    const handleInputChange = (index, field, value) => {
        const newJobs = [...jobs];
        newJobs[index][field] = value;
        setJobs(newJobs);
    };

    const saveData = () => {
        localStorage.setItem('jobdata', JSON.stringify(jobs));
        alert("Data saved successfully")
    };

    return (
        <div>
            <Stepper />
            <h1 className="work">Work Experience</h1>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        <div className="job-box">
                            <h2 className="job">Job {index + 1}</h2>
                            <input
                                type="text"
                                placeholder="Enter Company Name"
                                value={job.Company}
                                onChange={(e) => handleInputChange(index, "Company", e.target.value)}
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Enter Job Title"
                                value={job.JobTitle}
                                onChange={(e) => handleInputChange(index, "JobTitle", e.target.value)}
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Enter Duration"
                                value={job.Duration}
                                onChange={(e) => handleInputChange(index, "Duration", e.target.value)}
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                            />
                            <br />
                            <h3 className="bullet">Bullet point:</h3>
                            <input
                                type="text"
                                placeholder="What you have learned from your work experience?"
                                value={job.Point}
                                onChange={(e) => handleInputChange(index, "Point", e.target.value)}
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                            />
                            <br />
                            <button className='AddMore-btn' onClick={addJob} style={{ width: "80px" }}>Add More</button>
                            {jobs.length > 1 && (
                                <button className="remove-btn" onClick={() => removeJob(index)} style={{ marginLeft: "3px" }}>Remove</button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <button className="save" onClick={saveData}>Save</button>
            <br></br>
            <Link to='/projects' className='back'>Next</Link>
            <Link to='/Technical-skills' className='back'>Back</Link>
        </div>
    );
}

export default Experience;
