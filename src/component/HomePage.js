import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div className='center-line'>
        <h1>LAND YOUR DREAM JOB</h1> 
        <h1>WITH A PROFESSIONALLY CRAFTED RESUME </h1>
        <h1> – READY IN JUST MINUTES!</h1>
        <Link to="/personal-details" className='makebtn'>Make My Resume</Link>
        </div>
    )
}
export default HomePage;