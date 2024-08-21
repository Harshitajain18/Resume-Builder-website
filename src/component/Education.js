import { useState } from "react";
import { Link } from "react-router-dom";
function Education(){

    const [degree,setDegree] = useState([{id:1}]);

    const AddDegree = () =>{
        setDegree([...degree , {id : degree+1} ] )
    }

    const RemoveDegree = (index) =>{
        const NewList = [...degree];
        NewList.splice(index,1);
        setDegree(NewList);
    }
 
    return(
        <div>
            <h1 className="education">Education</h1> 
            <button className="AddMore-btn" onClick={AddDegree}>Add More</button>

            {
                degree.map((degree,index) =>(
                    <div className="education-box" key={degree.id}>
                    <h2 className="degree">Degree {index+1} </h2>
                        <input type="text" placeholder="Enter College Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                        <br></br>
                        <input type="text" placeholder="Enter Course Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                        <br></br>
                        <input type="text" placeholder="Enter year" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                        <br></br>
                    <button className="remove-btn" onClick={RemoveDegree}>Remove</button>
                </div>
                ))
            }

           
            <Link to='/interest' className="next">Next</Link>
            <Link to='/projects' className="back" >Back</Link>
        </div>
    )
}
export default Education;