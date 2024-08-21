import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useLocation } from "react-router-dom";

function Navbar(){
   const location = useLocation();
    const IsHomePage = location.pathname==='/home';
    return(
        <div>
           

            <ul className="navbar">
            <h2 className="top" style={{marginLeft:"10px" , paddingTop:"5px"}}>Resume Builder</h2>
                {
                    IsHomePage  && ( 
                    <>
                    <li> <NavLink className="navbar-link" to='/Signup' style={{paddingRight:"10px"}} >Sign Up <VscAccount /> </NavLink> </li>
                    <li> <NavLink className="navbar-link" to='/Signin' style={{paddingRight:"20px"}} >Sign In <VscAccount /> </NavLink> </li>
                    </>
                    )
                }
                </ul>

            </div>
    )
};
export default Navbar;