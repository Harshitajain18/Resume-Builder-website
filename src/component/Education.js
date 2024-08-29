import {useEffect,useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Education.css';
import Stepper from "./Stepper";

function Education(){
    const initialValues={InstituteName:"",CourseName:"",Year:""};

    const [degree, setDegree] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem('degree'));
        return Array.isArray(savedData) ? savedData : [initialValues];
    });

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('degree'));
        if (Array.isArray(savedData)) {
            setDegree(savedData);   
        }
    }, []);

    const AddDegree = () => {
        setDegree([...degree, { ...initialValues }]);
    };

    const RemoveDegree = (index) => {
        const newDegree = [...degree];
        newDegree.splice(index, 1);
        setDegree(newDegree);
    };
    const handleInputChange = (index, field, value) => {
        const newDegree = [...degree];
        newDegree[index][field] = value;
        setDegree(newDegree);
    };

    const saveData = () => {
        localStorage.setItem('degree', JSON.stringify(degree));
        alert("Data saved sucessfully")
    };
 return (
        <div>
            <Stepper/>
            <h1 className="education">Education</h1>
            <ul>
                {degree.map((degrees, index) => (
                    <li key={index}>
                        <div className="education-box" key={degrees.id}>
                            <h2 className="degree">Degree {index + 1}</h2>
                            <input
                                type="text"
                                value={degree.InstituteName}
                                placeholder="Enter Institute Name"
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                onChange={(e) => handleInputChange(index, "Institute Name", e.target.value)}
                            />
                            <br></br>
                            <input
                                type="text"
                                value={degree.CourseName}
                                placeholder="Enter Course Name"
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                onChange={(e) => handleInputChange(index,"CourseName", e.target.value)}
                            />
                            <br></br>
                            <input
                                type="text"
                                value={degree.Year}
                                placeholder="Enter year"
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                onChange={(e) => handleInputChange(index,"Year", e.target.value)}
                            />
                            <br></br>
                            <button className="AddMore-btn" onClick={AddDegree}>Add More</button>
                            {
                                degree.length > 1 &&
                                <button className="remove-btn" style={{ marginLeft: "3px" }} onClick={() => RemoveDegree(index)}>Remove</button>
                            }
                        </div>
                    </li>
                ))}
            </ul>
            <button className="save" onClick={saveData}>Save</button>
            <br></br>
            <Link to='/interest' className="next">Next</Link>
            <Link to='/projects' className="back">Back</Link>
        </div>
    )
}

export default Education;
