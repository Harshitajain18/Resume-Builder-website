import {useState } from "react";
import { Link } from "react-router-dom";
import '../TechSkills.css';
import Stepper from "./Stepper";

function TechSkills() {
    const [input, setInput] = useState("");
    const [list, setList] = useState(() => {
        const savedList = localStorage.getItem('skills');
        return savedList ? JSON.parse(savedList) : [];
    });

    const AddSkill = () => {
        setList([...list, input]);
        setInput("");
    }

    const Remove = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleSave = () => {
        localStorage.setItem('skills', JSON.stringify(list));
        alert("Skills saved successfully!");
    }

    return (
        <div>
            <Stepper />
            <h1 className="tech">Technical Skills</h1>

            <div className="tech-box">
                <input
                    type="text"
                    placeholder="Enter your Skill"
                    style={{ marginTop: "10px", width: "250px", height: "35px", paddingLeft: "5px" }}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button className="tech-btn" onClick={AddSkill}>Add Skill</button>
            </div>

            <div className="tech-box" style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "2px", width: "410px" }}>
                <ul>
                    {list.map((skill, index) => (
                        <li key={index} style={{ marginBottom: "5px", display: "flex", justifyContent: "space-between" }}>
                            {skill}
                            <button className="remove" onClick={() => { Remove(index) }}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="save" onClick={handleSave}>Save</button>
            <br />
            <Link to='/work-experience' className="next">Next</Link>
            <Link to="/link-details" className="back">Back</Link>
        </div>
    )
}

export default TechSkills;
