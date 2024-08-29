import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
    const {Component} = props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('signup');
        if(! login){
            navigate('/signup')
        }
        else {
            navigate('/personal-details');
        }
    },[navigate]);
    return(
        <div>   
            <Component/>
        </div>
    )
}
export default Protected;