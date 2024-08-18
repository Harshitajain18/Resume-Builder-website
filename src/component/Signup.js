import { Link } from "react-router-dom";

function Signup(){
    return(
        <div>
            <h1 className="signup">SIGN UP</h1>
            <div className="box">
            <input type="text" placeholder="Enter First Name" style={{marginRight:"6px"}}></input>
            
            <input type="text" placeholder="Enter Last Name"></input>
            <br></br>
            <br></br>
            <input type="email" placeholder="Enter Email"></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter Password"></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Re-Enter Password"></input>
            <br></br>
            <br></br>
            <input type="checkbox"/> <span> I accept terms & conditions</span>
            <br></br>
            <br></br>
            <button className="btn">Sign Up</button>
            <br></br>
            <span> Already have an account ?</span>
            <Link to='/signin' style={{marginLeft:"4px"}}>SignIn</Link>
            </div>
           
        </div>
    )
}
export default Signup;