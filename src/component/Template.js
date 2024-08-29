import React, { useEffect, useState } from 'react';
import '../styles/Template.css';
import { IoMailSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Template() {
    const [prsnldata, setPrsnlData] = useState({ Name: "", JobTitle: "", Email: "", Contact: "", Address: "" });
    const [linkdata, setLinkData] = useState({ LinkedinLink: "", GitHubLink: "" });
    const [degree, setDegree] = useState({ InstituteName: "", CourseName: "", Year: "" });
    const [skills, setSkills] = useState([]); 
    const [job,setJobs]=useState([]);
    const [projects,setProject]=useState([]);
    const [certificate,setCertificate]=useState([]);

    useEffect(() => {
        const savedPrsnlData = localStorage.getItem('prsnldata');
        if (savedPrsnlData) {
            setPrsnlData(JSON.parse(savedPrsnlData));
        }
    }, []);

    useEffect(() => {
        const savedLinkData = localStorage.getItem('linkdata');
        if (savedLinkData) {
            setLinkData(JSON.parse(savedLinkData));
        }
    }, []);

    useEffect(() => {
        const savedDegreeData = localStorage.getItem('degree');
        if (savedDegreeData) {
            setDegree(JSON.parse(savedDegreeData));
        }
    }, []);

    useEffect(() => {
        const savedSkills = localStorage.getItem('skills');
        if (savedSkills) {
            setSkills(JSON.parse(savedSkills));
        }
    }, []);

    useEffect(()=>{
        const savedJobs = localStorage.getItem('jobdata');
        if(savedJobs){
            setJobs(JSON.parse(savedJobs));
        }
    },[]);

    useEffect(()=>{
        const savedProjects = localStorage.getItem('project');
        if(savedProjects){
            setProject(JSON.parse(savedProjects));
        }
    },[]);  

    useEffect(()=>{
        const savedCertificates=localStorage.getItem('certificates');
        if(savedCertificates){
            setCertificate(JSON.parse(savedCertificates));
        }
    },[]);

    return (
    
        <div className='temp-box'>
            <h1>{prsnldata.Name}</h1>
            <br></br>

            <div className='top'> 
            <h4> <IoMailSharp />{prsnldata.Email}</h4>
            <h4><MdAddIcCall />{prsnldata.Contact}</h4>
            <h4><FaLinkedin />{linkdata.LinkedinLink}</h4>
            <h4><FaGithub />{linkdata.GitHubLink}</h4>
            </div>
           
            <hr style={{ border: '1px solid black',marginTop:"2px" }}></hr>

            <div className='edu'>
            <h3>Education:</h3>
            <h2>{degree.InstituteName}</h2>
            <h2>{degree.CourseName}</h2>
            <h2>{degree.Year}</h2>
            </div>
           
           <div className='tech'>
           <h3>Technical Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li style={{listStyleType:"none"}} key={index}>{skill} ,</li>
                ))}
            </ul>
           </div>
            

        
        <h3 style={{display:"flex",marginLeft:"3px"}}>Work Experience:</h3>
                <ul>
                    {job.map((jobItem, index) => (
                         <li style={{listStyleType:"none"}} key={index}>
                            <h4 style={{marginLeft:"8px",display:"flex"}}>{jobItem.Company}</h4>
                            <div style={{marginLeft: "8px", display: "flex", justifyContent: "space-between"}}>
                            <p style={{margin:0}}>{jobItem.JobTitle}</p>
                            <p style={{marginRight:"8px"}}>{jobItem.Duration}</p>
                            </div>
                            <p style={{marginLeft:"8px",display:"flex"}}>{jobItem.Point}</p>
                         </li>
                     ))}
                </ul>
      
            
            <h3 style={{display:"flex",marginLeft:"3px",marginTop:"2px"}}>Projects:</h3>
                     <ul>
                        {projects.map((projectItem,index)=>(
                            <li style={{listStyleType:"none"}} key={index}>
                                <h4 style={{marginLeft:"4px",display:"flex"}}>{projectItem.ProjectName} </h4>
                                <p style={{marginLeft:"8px",display:"flex"}}>{projectItem.TechnologyUsed}</p>
                                <p style={{marginLeft:"8px",display:"flex"}}>{projectItem.About}</p>
                            </li>
                        ))}
                     </ul>
            
            <div className='medal'>
            <h3 style={{marginLeft:"3px",display:"flex"}}>Certificates:</h3>
            <ul>
                {
                    certificate.map((certificate,index)=>(
                        <li style={{listStyleType:"none" , marginLeft:"4px",display:"flex"}} key={index}>{certificate}</li>
                    ))
                }
            </ul>
            </div>
           

        </div>
    );
}

export default Template;
