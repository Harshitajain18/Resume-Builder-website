import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";

function Experience() {
    const [input,setInput] = useState("");
    const [jobs, setJobs] = useState([{ id: 1 }]);

    const addJob = () => {
        setJobs([...jobs, { id: jobs+ 1 }]);
    };

    const removeJob = (index) => {
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
    };

    return (
        <div>
             <div className="Stepper">
            <ul>
                <li> <Link to='/personal-details'><IoPersonSharp/></Link> </li>
                <li> <Link to='/link-details'> <RiLinksLine /></Link> </li>
                <li> <Link to='/Technical-skills'> <FaBrain /></Link> </li>
                <li> <Link to='/work-experience'> <MdOutlineWork />  </Link> </li>
                <li> <Link to='/projects'> <GoProjectRoadmap /> </Link> </li>
                <li> <Link to='/education'> <MdCastForEducation /></Link> </li>
                <li> <Link to='/interest'> <GiRibbonMedal /></Link> </li>
            </ul>
        </div>
            <h1 className="work">Work Experience</h1>
            
        <ul>

        {jobs.map((job, index) => (
            <li key={job.id}> 
                <div className="job-box" key={job.id}>
                    <h2 className="job">Job {index + 1}</h2>
                    <input 
                        type="text" 
                        placeholder="Enter Company Name" 
                        onChange={(e)=>{setInput(e.target.value)}}
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter Job Title" 
                        onChange={(e)=>{setInput(e.target.value)}}
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter Duration" 
                        onChange={(e)=>{setInput(e.target.value)}}
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <h3 className="bullet">Bullet point:</h3>
                    <input 
                        type="text" 
                        placeholder="What you have learned from your work experience?" 
                        onChange={(e)=>{setInput(e.target.value)}}
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <button className='AddMore-btn' onClick={addJob} style={{width:"80px"}}>Add More</button>
                    {
                        jobs.length > 1 && <button className="remove-btn" onClick={() => removeJob(index)} style={{marginLeft:"3px"}}>Remove</button>

                    }

                </div>
          
            </li>
              ))}
       </ul>
           
            <Link to='/projects' className='back'>Next</Link>
            <Link to='/Technical-skills' className='back'>Back</Link>
        </div>
    );
}

export default Experience;