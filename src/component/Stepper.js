import { IoPersonSharp } from "react-icons/io5";
import { RiLinksLine } from "react-icons/ri";
import { FaBrain } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { GiRibbonMedal } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../Stepper.css'; 
function Stepper(){
    const location=useLocation();    
    const HideStepper= location.pathname === '/' ||  location.pathname=== '/signin' || location.pathname === '/Signup';
    return(
<div>
    
<ul>
        { 
            !HideStepper && (
                <>
                <li> <NavLink to='/personal-details'> <IoPersonSharp  className="prsnldetail"/> </NavLink> </li>
                <li> <NavLink to='/link-details'> <RiLinksLine className="linkdetail"/> </NavLink> </li>
                <li> <NavLink to='/Technical-skills'> <FaBrain className="techdetail"/> </NavLink></li>
                <li> <NavLink to='/work-experience'> <MdOutlineWork className="workdetail"/> </NavLink> </li>
                <li> <NavLink to='/projects'> <GoProjectRoadmap className="projectdetail"/> </NavLink> </li>
                <li> <NavLink to='/education'> <MdCastForEducation className="degreedetail"/> </NavLink> </li>
                <li> <NavLink to='/interest'> <GiRibbonMedal className="certificatedetail"/> </NavLink> </li>
                </>
            )
        }
           
       </ul>
        </div>
    )
}
export default Stepper;