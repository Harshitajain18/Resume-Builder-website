import { Link } from "react-router-dom";

import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";

function Url(){
    return (
        
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
            <h1 className="link">Links</h1>
            <div className="urlBox">
            <input type="url" placeholder="Enter LinkedIn Link" style={{marginTop:"20px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="url" placeholder="Enter GitHub Link" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            </div>
            <Link className="next" to='/Technical-skills' >Next </Link>
            <Link className="back" to='/personal-details' >Back </Link>
           
        </div>
    )
}
export default Url;