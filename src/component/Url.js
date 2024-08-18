import { Link } from "react-router-dom";
function Url(){
    return (
        <div>
            <h1 className="link">Links</h1>
            <div className="urlBox">
            <input type="url" placeholder="Enter LinkedIn Link" style={{marginTop:"20px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            <br></br>
            <input type="url" placeholder="Enter GitHub Link" style={{marginTop:"10px", width:"250px" , height:"50px", paddingLeft:"5px"}}></input>
            </div>
            <Link className="next" to='/Technical-skills' >Next </Link>
            <Link className="back" to='/personal-details' >Back </Link>
           
        </div>
    )
}
export default Url;