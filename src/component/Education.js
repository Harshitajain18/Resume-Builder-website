import { Link } from "react-router-dom";
function Education(){
    return(
        <div>
            <h1 className="education">Education</h1>
            <div className="education-box">
                <h2 className="degree">Degree</h2>
                    <input type="text" placeholder="Enter College Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                    <br></br>
                    <input type="text" placeholder="Enter Course Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                    <br></br>
                    <input type="text" placeholder="Enter year" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            </div>
            <Link to='/interest' className="next">Next</Link>
            <Link to='/projects' className="back" >Back</Link>
        </div>
    )
}
export default Education;