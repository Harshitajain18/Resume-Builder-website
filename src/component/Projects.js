import { useState } from "react";
import { Link } from "react-router-dom";

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
            <h1 className="project">Projects </h1>
            <button className="AddMore-btn" onClick={AddProject}>Add More</button>

            {
                project.map((project,index) =>(
            <div className="project-box" key={project.id}>
                <h2 className="project-main">Project {index+1}</h2>
            <input type="text" placeholder="Enter Project Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="text" placeholder="Technology used" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <h2 className="bullet">Bullet point:</h2>
            <input type="text" placeholder="About project" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <button className="remove-btn" onClick={DeleteProject}>Remove</button>
            </div>
                ))
            }
            
            <Link to='/education' className="next">Next</Link>
            <Link to='/work-experience' className="back" >Back</Link>
        </div>
    )
}
export default Projects;