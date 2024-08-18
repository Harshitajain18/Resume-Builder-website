import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div>
           

            <ul className="navbar">
            <h2 className="top" style={{marginLeft:"10px" , paddingTop:"5px"}}>Resume Builder</h2>
                <li> <NavLink className="navbar-link" to='/Signup' style={{paddingRight:"10px"}} >Sign Up</NavLink> </li>
                <li> <NavLink className="navbar-link" to='/Signin' style={{paddingRight:"20px"}} >Sign In</NavLink> </li>
            </ul>
            </div>
    )
};
export default Navbar;