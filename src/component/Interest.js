import { useState } from "react";
import { Link } from "react-router-dom";
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