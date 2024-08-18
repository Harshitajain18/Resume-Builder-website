import { Link } from "react-router-dom";
function PersonalDetails(){
    return(
        <div>
            <h1 className="prsnl-detail">Personal Details</h1>
            <div className="pBox">
            <input type="text" placeholder="Enter Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="text" placeholder="Enter Job Title" style={{marginTop:"6px" , width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="mail" placeholder="Enter Email" style={{marginTop:"6px" , width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="tel" placeholder="Contact number" style={{marginTop:"6px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input> 
            <br></br>
            <textarea  type="text" placeholder="Address" style={{marginTop:"6px" , width:"250px" , height:"90px", paddingLeft:"5px"}}></textarea>
            </div>
            <Link className="next" to='/link-details' >Next </Link>
            <Link className="back" to='/home' >Go Back to Home Page </Link>
        </div>
    )
}
export default PersonalDetails;