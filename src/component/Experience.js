import { useState } from 'react';
import { Link } from 'react-router-dom';

function Experience() {
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
            <h1 className="work">Work Experience</h1>
            <button className='AddMore-btn' onClick={addJob}>Add More</button>

            {jobs.map((job, index) => (
                <div className="job-box" key={job.id}>
                    <h2 className="job">Job {index + 1}</h2>
                    <input 
                        type="text" 
                        placeholder="Enter Company Name" 
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter Job Title" 
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Enter Duration" 
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <h3 className="bullet">Bullet point:</h3>
                    <input 
                        type="text" 
                        placeholder="What you have learned from your work experience?" 
                        style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                    />
                    <br />
                    <button className="remove-btn" onClick={() => removeJob(index)}>Remove</button>
                </div>
            ))}

            <Link to='/projects' className='back'>Next</Link>
            <Link to='/Technical-skills' className='back'>Back</Link>
        </div>
    );
}

export default Experience;


// import {Link} from 'react-router-dom';
// function Experience(){
//     return(
//         <div>
//             <h1 className="work"> Work Experience</h1>
//             <button>Add More</button>
//             <div className="job-box">
//                 <h2 className="job">Job</h2>
//                 <input type="text" placeholder="Enter Company Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
//                 <br></br>
//                 <input type="text" placeholder="Enter Job Title" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
//                 <br></br>
//                 <input type="text" placeholder="Enter Duration" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
//                 <br></br>
//                 <h3 className="bullet">Bullet point:</h3>
//                 <input type="text" placeholder="What you have learned from your work-experience ? " style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
//                 <button className="remove">Remove</button>
//             </div>
//             <Link to='/projects' className='back'>Next</Link>
//           <Link to='/Technical-skills' className='back'>Back</Link>
//         </div>
//     )
// }
// export default Experience;