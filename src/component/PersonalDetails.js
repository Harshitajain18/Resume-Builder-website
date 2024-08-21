import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";

function PersonalDetails(){
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