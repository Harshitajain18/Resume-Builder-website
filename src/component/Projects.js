import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Projects.css';
import Stepper from "./Stepper";

function Projects() {
    const initialValues = { ProjectName: "", TechnologyUsed: "", About: "" };
    
    const [project, setProject] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem('project'));
        return Array.isArray(savedData) ? savedData : [initialValues];
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('project'));
        if (Array.isArray(savedData)) {
            setProject(savedData);
        }
    }, []);

    const AddProject = () => {
        setProject([...project, { ...initialValues }]);
    };

    const DeleteProject = (index) => {
        const newProjects = [...project];
        newProjects.splice(index, 1);
        setProject(newProjects);  
    };

    const handleInputChange = (index, field, value) => {
        const newProjects = [...project];
        newProjects[index][field] = value;
        setProject(newProjects);
    };

    const saveData = () => {
        localStorage.setItem('project', JSON.stringify(project));
        alert("Data saved successfully")
    };

    return (
        <div>
            <Stepper />
            <h1 className="project">Projects</h1>
            <ul>
                {
                    project.map((projects, index) => (
                        <li key={index}>
                            <div className="project-box">
                                <h2 className="project-main">Project {index + 1}</h2>
                                <input
                                    type="text"
                                    placeholder="Enter Project Name"
                                    style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                    value={projects.ProjectName}
                                    onChange={(e) => handleInputChange(index, "ProjectName", e.target.value)}
                                />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Technology used"
                                    style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                    value={projects.TechnologyUsed}
                                    onChange={(e) => handleInputChange(index, "TechnologyUsed", e.target.value)} // Corrected field name
                                />
                                <br />
                                <h2 className="bullet">Bullet point:</h2>
                                <input
                                    type="text"
                                    placeholder="About project"
                                    style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                    value={projects.About}
                                    onChange={(e) => handleInputChange(index, "About", e.target.value)}
                                />
                                <br />
                                <button className="AddMore-btn" onClick={AddProject}>Add More</button>

                                {
                                    project.length > 1 &&
                                    <button
                                        className="remove-btn"
                                        style={{ marginLeft: "3px" }}
                                        onClick={() => DeleteProject(index)}
                                    >
                                        Remove
                                    </button>
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
            <button className="save" onClick={saveData}>Save</button>
            <br />
            <Link to='/education' className="next">Next</Link>
            <Link to='/work-experience' className="back">Back</Link>
        </div>
    );
}

export default Projects;

