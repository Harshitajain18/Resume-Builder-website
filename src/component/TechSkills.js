import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";

function TechSkills(){
    

    const [input,setInput]=useState("");
    const [list,setList]=useState([]);

    const AddSkill = () =>{
    setList([...list,input]);
    setInput("");
 }

    const Remove = (index) =>{
    const newList = [...list];
    newList.splice(index,1);
    setList(newList);

 };

    return(
        <div>
                 <div className="Stepper">
            <ul>
                <li> <Link to='/personal-details'><IoPersonSharp/></Link> </li>
                <li> <Link to='/link-details'> <RiLinksLine /></Link> </li>
                <li> <Link to='/Technical-skills'> <FaBrain /></Link> </li>
                <li> <Link to='/work-experience'> <MdOutlineWork />  </Link> </li>
                <li> <Link to='/projects'> <GoProjectRoadmap /> </Link> </li>
                <li> <Link to='/education'> <MdCastForEducation /></Link> </li>
                <li> <Link to='/interest'> <GiRibbonMedal /></Link> </li>
            </ul>
        </div>
            <h1 className="tech">Technical Skills</h1>

            <div className="tech-box">
                <input type="text" placeholder="Enter your Skill" style={{marginTop:"10px", width:"250px" , height:"35px", paddingLeft:"5px"}} value={input} onChange={(event)=>setInput(event.target.value)} />
                <button className="tech-btn" onClick={AddSkill}>Add Skill</button>
            </div>̥
          
            <div className="tech-box" style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "2px", width: "410px" }}>
                <ul>
                    {
                        list.map((skill, index) => (
                                <li key={index} style={{ margi̥nBottom: "5px", display: "flex", justifyContent: "space-between" }}>
                                {skill}
                                <button className="remove" onClick={() => { Remove(index) }}>Remove</button>
                                </li>
                        ))
                    }
                </ul>
            </div>

            {/* <ul>
                {
                    list.map((skill,index) => (
                        <li key={index}>
                        
                            {skill}
                            <button className="remove" onClick={()=>{Remove(index)}}>Remove</button>
                        </li>
                    ))
                }
            </ul> */}
           
            <Link to='/work-experience' className="next">Next</Link>
            <Link to="/link-details" className="back">Back</Link>            
        </div>
    )
}
export default TechSkills;