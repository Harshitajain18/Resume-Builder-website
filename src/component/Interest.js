import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";

function Interest(){

    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const AddCertificate = () =>{
        setList([...list,input]);
        setInput("");
    }

    const Remove = (index) =>{
        const newList = [...list];
        newList.splice(index,1);
        setList(newList);
    }

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
            <h1 className="interest">Certifications</h1>

            <div className="certificate-box">
            <input type="text" placeholder="Enter Certificates" value={input} onChange={(e)=>{setInput(e.target.value)}} style={{marginTop:"10px", width:"250px" , height:"40px", paddingLeft:"5px"}}></input>
            <button className="certificate-btn" onClick={AddCertificate}>Add Certificate</button>
            <br></br>
            </div>

            <div className="certificate-box" style={{border:"1px solid #ccc", borderRadius:"2px" }}>
            <ul>
                {
                    list.map((Certificate,index)=>(
                        <li key={index} style={{ marginBottom: "5px", display: "flex", justifyContent: "space-between" }}>{Certificate}
                        <button className="remove" onClick={Remove}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            </div>
            

            {/* <input type="text" placeholder="Enter Certificates" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <button onClick={HandleRemove} className="remove">Remove</button>
            
            <ul>
              {list.map((certificate,index) => (
                <li style={{listStyleType:"none"}} key={index}>{certificate}</li>
              ))}
            </ul> */}

            
            <Link to='/education' className="back" >Back</Link>
        </div>
    )
}
export default Interest;