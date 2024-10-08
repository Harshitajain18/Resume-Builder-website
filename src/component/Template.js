import React, { useEffect, useState, useRef } from 'react';
import '../styles/Template.css';
import { IoMailSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function Template() {
    const [prsnldata, setPrsnlData] = useState({ Name: "", JobTitle: "", Email: "", Contact: "", Address: "" });
    const [linkdata, setLinkData] = useState({ LinkedinLink: "", GitHubLink: "" });
    const [degree, setDegree] = useState([]);
    const [skills, setSkills] = useState([]); 
    const [job, setJobs] = useState([]);
    const [projects, setProject] = useState([]);
    const [certificate, setCertificate] = useState([]);

    const componentRef = useRef(); 

    const handleSaveAsPDF = () => {
        const input = componentRef.current;
        html2canvas(input, {
            scale: 3, // Increase scale for better quality
            scrollY: -window.scrollY, // Adjust for scroll offset
            scrollX: -window.scrollX,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                unit: 'px',
                format: [canvas.width, canvas.height] // Adjust PDF format to canvas size
            });
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('resume.pdf');
        //     const filename = prompt('Enter the filename for the PDF:', 'resume.pdf');
        // pdf.save(filename || 'resume.pdf'); 
        });
    };

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

    useEffect(() => {
        const savedJobs = localStorage.getItem('jobdata');
        if (savedJobs) {
            setJobs(JSON.parse(savedJobs));
        }
    }, []);

    useEffect(() => {
        const savedProjects = localStorage.getItem('project');
        if (savedProjects) {
            setProject(JSON.parse(savedProjects));
        }
    }, []);  

    useEffect(() => {
        const savedCertificates = localStorage.getItem('certificates');
        if (savedCertificates) {
            setCertificate(JSON.parse(savedCertificates));
        }
    }, []);

    return (
        <div>
            <div className='temp-box' ref={componentRef}> 
                <h1>{prsnldata.Name}</h1>
                <br />
                <div className='top'> 
                    <h4><IoMailSharp />{prsnldata.Email}</h4>
                    <h4><MdAddIcCall />{prsnldata.Contact}</h4>
                    <h4><FaLinkedin />{linkdata.LinkedinLink}</h4>
                    <h4><FaGithub />{linkdata.GitHubLink}</h4>
                </div>
                <hr style={{ border: '1px solid black', marginTop: "2px" }} />
                <h3 className='edu'>Education:</h3>
                <ul>
                    {degree.map((degItem, index) => (
                        <li style={{ listStyleType: "none" }} key={index}>
                            <div style={{ marginLeft: "3px", display: "flex", justifyContent: "space-between" }}> 
                                <p>{degItem.InstituteName}</p>
                                <p style={{ marginRight: "4px" }}>{degItem.Year}</p>
                            </div>
                            <p style={{ display: "flex", marginLeft: "3px" }}>{degItem.CourseName} </p>       
                        </li>
                    ))}
                </ul>
                <div className='techi'>
                    <h3>Technical Skills:</h3>
                    <ul>
                        {skills.map((skill, index) => (
                            <li style={{ listStyleType: "none" }} key={index}>{skill} ,</li>
                        ))}
                    </ul>
                </div>
                <h3 style={{ display: "flex", marginLeft: "3px", marginBottom: "2px" }}>Work Experience:</h3>
                <ul>
                    {job.map((jobItem, index) => (
                        <li style={{ listStyleType: "none" }} key={index}>
                            <h4 style={{ marginLeft: "8px", display: "flex" }}>{jobItem.Company}</h4>
                            <div style={{ marginLeft: "8px", display: "flex", justifyContent: "space-between" }}>
                                <p style={{ margin: 0 }}>{jobItem.JobTitle}</p>
                                <p style={{ marginRight: "8px" }}>{jobItem.Duration}</p>
                            </div>
                            <p style={{ marginLeft: "8px", display: "flex" }}>{jobItem.Point}</p>
                        </li>
                    ))}
                </ul>
                <h3 style={{ display: "flex", marginLeft: "3px", marginTop: "2px", marginBottom: "2px" }}>Projects:</h3>
                <ul>
                    {projects.map((projectItem, index) => (
                        <li style={{ listStyleType: "none" }} key={index}>
                            <h4 style={{ marginLeft: "4px", display: "flex" }}>{projectItem.ProjectName} </h4>
                            <p style={{ marginLeft: "8px", display: "flex" }}>{projectItem.TechnologyUsed}</p>
                            <p style={{ marginLeft: "8px", display: "flex" }}>{projectItem.About}</p>
                        </li>
                    ))}
                </ul>
                <div>
                    <h3 style={{ marginLeft: "3px", display: "flex", marginBottom: "2px" }}>Certificates:</h3>
                    <ul>
                        {certificate.map((cert, index) => (
                            <li style={{ listStyleType: "none", marginLeft: "4px", display: "flex" }} key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className='savebtn' onClick={handleSaveAsPDF}>Save as PDF</button>
            <Link to='/interest' className='back'>Back</Link>
        </div>
    );
}

export default Template;


