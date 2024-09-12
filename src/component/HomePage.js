import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleMakeResumeClick = () => {
        let login = localStorage.getItem('signup');
        if (login  && login !=="") {
            navigate('/personal-details'); 
        } else { 
            navigate('/signup'); 
        }
    };

    return (
        <div className='center-line'>
            <h1>LAND YOUR DREAM JOB</h1> 
            <h1>WITH A PROFESSIONALLY CRAFTED RESUME </h1>
            <h1> –READY IN JUST MINUTES!</h1>
            <button onClick={handleMakeResumeClick} className='makebtn'>Make My Resume</button>
            <br></br>
            <img className="img1" src="/images/proimage.jpg" alt="resume-image"></img> 
        </div>
    );
}

export default HomePage;
