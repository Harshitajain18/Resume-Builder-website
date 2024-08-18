import { useState } from "react";
import { Link } from "react-router-dom";

function TechSkills(){
    const [input,setInput]=useState("");
    const [list,setList]=useState([]);

   const HandleInput = (event) =>{
    setInput(event.target.value);
   }

   const HandleList = () =>{
        setList([...list,input])
        setInput("");
    }

    const HandleRemove = (key) => {
        let newList=[...list];
        newList.splice(key,1);
        setList([...newList]);
    }

    return(
        <div>
        
            <h1 className="tech">Technical Skills</h1>
            <div className="tech-box">
            <input type="text" placeholder="Enter your skill" value={input} style={{marginTop:"15px", width:"250px", paddingLeft:"5px"}} onChange={HandleInput}></input>
            <button className="tech-btn" onClick={HandleList}>Add Skill</button>
            <br></br>
            <input type="text" placeholder="Skill" style={{marginTop:"15px", width:"250px", paddingLeft:"5px"}} ></input>
            <button className="remove" onClick={HandleRemove} >Remove</button>
             <ul >
                {list.map((skill, index) => (
                    <li style={{listStyleType:"none"}} key={index}>{skill}</li>
                ))}
            </ul>
            </div>
           
            <Link to='/work-experience' className="next">Next</Link>
<Link to="/link-details" className="back">Back</Link>            
        </div>
    )
}
export default TechSkills;