import { useState } from "react";
function Signin(){
    const initialValues = { FirstName: "", LastName:"", Email: "", Password: "", ReEnterPass: ""};
    const [signIndata, setSignInData] = useState(() => {
       const savedData = localStorage.getItem('signIndata');
        return savedData ? JSON.parse(savedData) : initialValues;
    });

    const HandleInput = (event) => {
        const { name, value } = event.target;
        setSignInData({...signIndata, [name]: value });
    }

    const handleSave = () => {
        localStorage.setItem('signIndata', JSON.stringify(signIndata));
        alert("Data saved successfully!");
    }
    return(
        <div>
            <h1 className="signup">SIGN IN</h1>
            <div className="box">
            <input type="text" placeholder="Enter First Name" name="FirstName" value={signIndata.FirstName} onChange={HandleInput} style={{marginRight:"6px"}}></input>
            
            <input type="text" placeholder="Enter Last Name" name="LastName" value={signIndata.LastName}  onChange={HandleInput}></input>
            <br></br>
            <br></br>
            <input type="email" placeholder="Enter Email" name="Email" value={signIndata.Email}  onChange={HandleInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter Password" name="Password" value={signIndata.Password}  onChange={HandleInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Re-Enter Password" name="ReEnterPass" value={signIndata.ReEnterPass} onChange={HandleInput}></input>
            <br></br>
            <br></br>
            <input type="checkbox"/> <span> I accept terms & conditions</span>
            <br></br>
            <br></br>
            <button className="btn" onClick={handleSave}>Sign In</button>
            </div>
           
        </div>
    )
}
export default Signin;