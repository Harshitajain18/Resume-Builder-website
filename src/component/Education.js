import { useState } from "react";
import { Link } from "react-router-dom";
import '../Education.css';
import Stepper from "./Stepper";

function Education(){

    const [degree, setDegree] = useState([{ id: 1 }]);

    const AddDegree = () => {
        setDegree([...degree, { id: degree.length + 1 }]);
    }

    const RemoveDegree = (index) => {
        const NewList = [...degree];
        NewList.splice(index, 1);
        setDegree(NewList);
    }

    const initialValues = { CollegeName: "", CourseName: "", Year: "" };
    const [data, setData] = useState(initialValues);

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedData = { ...data, [name]: value };
        setData(updatedData);
    }

    const saveData = () => {
        localStorage.setItem('educationData', JSON.stringify(data));
        alert("Data saved successfully!");
    }

    return (
        <div>
            <Stepper/>
            <h1 className="education">Education</h1>
            <ul>
                {degree.map((degrees, index) => (
                    <li key={degrees.id}>
                        <div className="education-box" key={degrees.id}>
                            <h2 className="degree">Degree {index + 1}</h2>
                            <input
                                type="text"
                                name="CollegeName"
                                placeholder="Enter College Name"
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <br></br>
                            <input
                                type="text"
                                name="CourseName"
                                placeholder="Enter Course Name"
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                onChange={(e) => handleInputChange(index, e)}
                            />
                            <br></br>
                            <input
                                type="text"
                                name="Year"
                                placeholder="Enter year"
                                style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }}
                                onChange={(e) => handleInputChange(index, e)}
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
