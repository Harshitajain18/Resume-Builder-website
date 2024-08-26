import { Link } from "react-router-dom";
import "../Link.css";
import Stepper from "./Stepper";
import { useState } from "react";

function Url() {
  const initialValues = { LinkedinLink: "", GitHubLink: "" };
  const [data, setData] = useState(initialValues);

  const HandleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const HandleSave = () => {
    localStorage.setItem("data", JSON.stringify(data));
    alert("Data saved successfully!");
  };

  return (
    <div>
      <Stepper />
      <h1 className="link">Links</h1>
      <div className="urlBox">
        <input
          type="url"
          name="LinkedinLink"
          placeholder="Enter LinkedIn Link"
          value={data.LinkedinLink}
          onChange={HandleInput}
          style={{marginTop: "20px",width: "250px",height: "50px",paddingLeft: "5px",}}
        ></input>
        <br></br>
        <input
          type="url"
          name="GitHubLink"
          placeholder="Enter GitHub Link"
          value={data.GitHubLink}
          onChange={HandleInput}
          style={{marginTop: "10px",width: "250px",height: "50px",paddingLeft: "5px",}}
        ></input>
      </div>
      <button className="save" onClick={HandleSave}>
        Save
      </button>
      <br></br>
      <Link className="next" to="/Technical-skills">
        Next{" "}
      </Link>
      <Link className="back" to="/personal-details">
        Back{" "}
      </Link>
    </div>
  );
}

export default Url;
