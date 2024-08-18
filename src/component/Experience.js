import {Link} from 'react-router-dom';
function Experience(){
    return(
        <div>
            <h1 className="work"> Work Experience</h1>
            <div className="job-box">
                <h2 className="job">Job</h2>
                <input type="text" placeholder="Enter Company Name" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                <br></br>
                <input type="text" placeholder="Enter Job Title" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                <br></br>
                <input type="text" placeholder="Enter Duration" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                <br></br>
                <h3 className="bullet">Bullet points:</h3>
                <input type="text" placeholder="What you have learned from your work-experience ? " style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
                <button className="remove">Remove</button>
            </div>
            <Link to='/projects' className='back'>Next</Link>
          <Link to='/Technical-skills' className='back'>Back</Link>
        </div>
    )
}
export default Experience;