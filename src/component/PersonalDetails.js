import { Link } from "react-router-dom";
import '../PersonalDetail.css';
import Stepper from "./Stepper";
import { useState } from "react";

function PersonalDetails() {
    const initialValues = { Name: "", JobTitle: "", Email: "", Contact: "", Address: "" };
    const [data, setData] = useState(() => {
       const savedData = localStorage.getItem('data');
        return savedData ? JSON.parse(savedData) : initialValues;
    });

    const HandleInput = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value });
    }

    const handleSave = () => {
        localStorage.setItem('data', JSON.stringify(data));
        alert("Data saved successfully!");
    }

    return (
        <div>
            <Stepper />
            <h1 className="prsnl-detail">Personal Details</h1>
            <div className="pBox">
                <input 
                    type="text" 
                    name="Name" 
                    placeholder="Enter Name" 
                    value={data.Name} 
                    onChange={HandleInput} 
                    style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <input 
                    type="text" 
                    name="JobTitle" 
                    placeholder="Enter Job Title" 
                    value={data.JobTitle} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <input 
                    type="email" 
                    name="Email" 
                    placeholder="Enter Email" 
                    value={data.Email} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <input 
                    type="tel" 
                    name="Contact" 
                    placeholder="Contact number" 
                    value={data.Contact} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <textarea 
                    name="Address" 
                    placeholder="Address" 
                    value={data.Address} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "90px", paddingLeft: "5px" }} 
                />
            </div>
            <button className="save" onClick={handleSave}>Save</button>
            <br />
            <Link className="next" to='/link-details'>Next</Link>
            <Link className="back" to='/'>Go Back to Home Page</Link>
        </div>
    );
}

export default PersonalDetails;
