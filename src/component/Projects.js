import { Link } from "react-router-dom";
function Projects(){
    return(
        <div>
            <h1 className="project">Projects</h1>
            <div className="project-box">
            <input type="text" placeholder="Enter Project Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="text" placeholder="Technology used" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <h2 className="bullet">Bullet points:</h2>
            <input type="text" placeholder="About project" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <button className="remove">Remove</button>
            </div>
            <Link to='/education' className="next">Next</Link>
            <Link to='/work-experience' className="back" >Back</Link>
        </div>
    )
}
export default Projects;