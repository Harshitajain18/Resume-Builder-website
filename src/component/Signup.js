import { Link } from "react-router-dom";
import { useState } from "react";
import '../styles/Signup.css';

function Signup(){

    const initialValues = { FirstName: "", LastName:"", Email: "", Password: "", ReEnterPass: ""};
    const [signupdata, setSignUpData] = useState(() => {
       const savedData = localStorage.getItem('signupdata');
        return savedData ? JSON.parse(savedData) : initialValues;
    });

    const HandleInput = (event) => {
        const { name, value } = event.target;
        setSignUpData({...signupdata, [name]: value });
    }

   
    const handleSave = () => {
        if (signupdata.Password !== signupdata.ReEnterPass) {
            alert("Passwords must be the same!");
            return; 
        }
        localStorage.setItem('signupdata','true', JSON.stringify(signupdata));
        alert("Data saved successfully!");
        
    }

    return(
        <div>
            <h1 className="signup">SIGN UP </h1>
            <div className="box">
            <input type="text"  name="FirstName" value={signupdata.FirstName} onChange={HandleInput} placeholder="Enter First Name" style={{marginRight:"6px"}}></input>
            
            <input type="text"  name="LastName" value={signupdata.LastName}  onChange={HandleInput} placeholder="Enter Last Name" ></input>
            <br></br>
            <br></br>
            <input type="email" name="Email" value={signupdata.Email}  onChange={HandleInput} placeholder="Enter Email"></input>
            <br></br>
            <br></br>
            <input type="password" name="Password" value={signupdata.Password}  onChange={HandleInput} placeholder="Enter Password"></input>
            <br></br>
            <br></br>
            <input type="password" name="ReEnterPass" value={signupdata.ReEnterPass} onChange={HandleInput} placeholder="Re-Enter Password"></input>
            <br></br>
            <br></br>
            <input type="checkbox"/> <span> I accept terms & conditions</span>
            <br></br>
            <br></br>
            <Link to='/personal-details' className="btn" onClick={handleSave}>Sign Up</Link>
            {/* <button className="btn" onClick={handleSave}>Sign Up</button> */}
            <br></br>
            <span> Already have an account ?</span>
            <Link to='/signin' style={{marginLeft:"4px"}} >SignIn</Link>
            </div>
           
        </div>
    )
}
export default Signup;