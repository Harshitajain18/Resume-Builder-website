import { useState } from "react";
import { Link } from "react-router-dom";
function Interest(){

    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const HandleInput = (event) => {
        setInput(event.target.value);
    }

    const HandleList = () => {
        setList([...list , input])
        setInput("")
    }

    const HandleRemove = (index) => {
        let newList = [...list]
        newList.splice(index,1);
        setList([...newList]);
    }

    return(
        <div>
            <h1 className="interest">Certifications</h1>
            <div className="certificate-box">
            <input type="text" placeholder="Enter Certificates" value={input} onChange={HandleInput} style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <button className="certificate-btn" onClick={HandleList}>Add Certificate</button>
            <br></br>
            <input type="text" placeholder="Enter Certificates" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <button onClick={HandleRemove} className="remove">Remove</button>
            
            <ul>
              {list.map((certificate,index) => (
                <li style={{listStyleType:"none"}} key={index}>{certificate}</li>
              ))}
            </ul>
            </div>
            <Link to='/education' className="back" >Back</Link>
        </div>
    )
}
export default Interest;