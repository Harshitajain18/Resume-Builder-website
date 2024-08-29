import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Interest.css';
import Stepper from "./Stepper";

function Interest(){

    const [input,setInput] = useState("");
    const [list,setList] = useState(() => {
        const savedCertificates = localStorage.getItem('certificates');
        return savedCertificates ? JSON.parse(savedCertificates) : [];
    });

    const AddCertificate = () =>{
        setList([...list,input]);
        setInput("");
    }
    
    const Remove = (index) =>{
        const newList = [...list];
        newList.splice(index,1);
        setList(newList);
    }

    const saveCertificates = () => {
        localStorage.setItem('certificates', JSON.stringify(list));
    };

    return(
        <div>
           <Stepper/>
            <h1 className="interest">Certifications</h1>

            <div className="certificate-box">
                <input 
                    type="text" 
                    placeholder="Enter Certificates" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    style={{marginTop:"10px", width:"250px" , height:"40px", paddingLeft:"5px"}}
                />
                <button className="certificate-btn" onClick={AddCertificate}>Add Certificate</button>
            </div>

            <div className="certificate-box" style={{border:"1px solid #ccc", borderRadius:"2px"}}>
                <ul>
                    {list.map((certificate, index) => (
                        <li key={index} style={{ marginBottom: "5px", display: "flex", justifyContent: "space-between" }}>
                            {certificate}
                            <button className="remove" onClick={() => Remove(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            
            <button className="save" onClick={saveCertificates}>Save</button>
            <br />
            <Link to='/template' className="back" >Show My Resume</Link>
            <Link to='/education' className="back">Back</Link>
        </div>
    );
}

export default Interest;
