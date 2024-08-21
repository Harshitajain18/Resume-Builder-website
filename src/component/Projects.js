import { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";

function Projects(){

const [project,setProject] = useState([{id:1}]);

const AddProject = () =>{
    setProject([...project,{id : project+1}])
}

const DeleteProject = (index) =>{
    const NewList = [...project];
    NewList.splice(index,1);
    setProject(NewList);
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
            <h1 className="project">Projects </h1>
        <ul>

      
            {
                project.map((projects,index) =>(
                    <li key={projects.id}> 
            <div className="project-box" key={projects.id}>
                <h2 className="project-main">Project {index+1}</h2>
            <input type="text" placeholder="Enter Project Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="text" placeholder="Technology used" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <h2 className="bullet">Bullet point:</h2>
            <input type="text" placeholder="About project" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <button className="AddMore-btn" onClick={AddProject}>Add More</button>

            {
                project.length >1 && <button className="remove-btn" style={{marginLeft:"3px"}} onClick={DeleteProject}>Remove</button>
            }
            
            </div>
            </li>
                ))
            }
           
              </ul>
            <Link to='/education' className="next">Next</Link>
            <Link to='/work-experience' className="back" >Back</Link>
        </div>
    )
}
export default Projects;