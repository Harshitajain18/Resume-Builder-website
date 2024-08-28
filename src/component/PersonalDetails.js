import { Link } from "react-router-dom";
import '../styles/PersonalDetail.css';
import Stepper from "./Stepper";
import { useState } from "react";

function PersonalDetails() {
    const initialValues = { Name: "", JobTitle: "", Email: "", Contact: "", Address: "" };
    const [prsnldata, setPrsnlData] = useState(() => {
       const savedData = localStorage.getItem('prsnldata');
        return savedData ? JSON.parse(savedData) : initialValues;
    });

    const HandleInput = (event) => {
        const { name, value } = event.target;
        setPrsnlData({...prsnldata, [name]: value });
    }

    const handleSave = () => {
        localStorage.setItem('prsnldata', JSON.stringify(prsnldata));
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
                    value={prsnldata.Name} 
                    onChange={HandleInput} 
                    style={{ marginTop: "10px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <input 
                    type="text" 
                    name="JobTitle" 
                    placeholder="Enter Job Title" 
                    value={prsnldata.JobTitle} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <input 
                    type="email" 
                    name="Email" 
                    placeholder="Enter Email" 
                    value={prsnldata.Email} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <input 
                    type="tel" 
                    name="Contact" 
                    placeholder="Contact number" 
                    value={prsnldata.Contact} 
                    onChange={HandleInput} 
                    style={{ marginTop: "6px", width: "250px", height: "50px", paddingLeft: "5px" }} 
                />
                <br />
                <textarea 
                    name="Address" 
                    placeholder="Address" 
                    value={prsnldata.Address} 
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
