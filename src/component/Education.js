import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";
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
            <h1 className="education">Education</h1> 
            <ul> 

            {
                degree.map((degrees,index) =>(
                    <li key={degrees.id}> 
                    
                    <div className="education-box" key={degrees.id}>
                    <h2 className="degree">Degree {index+1} </h2>
                        <input type="text" placeholder="Enter College Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                        <br></br>
                        <input type="text" placeholder="Enter Course Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                        <br></br>
                        <input type="text" placeholder="Enter year" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                        <br></br>
                        <button className="AddMore-btn" onClick={AddDegree}>Add More</button>

                        {
                            degree.length > 1 &&  <button className="remove-btn" style={{marginLeft:"3px"}} onClick={RemoveDegree}>Remove</button>
                        }
                </div>
                    
                </li>
                ))
            }
             </ul>

            <Link to='/interest' className="next">Next</Link>
            <Link to='/projects' className="back" >Back</Link>
        </div>
       
    )
}
export default Education;