
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Signup from './component/Signup';
import './Signup.css';
import Navbar from './component/Navbar';
import './Navbar.css';
import Signin from './component/Signin';
import PersonalDetails from './component/PersonalDetails';
import './PersonalDetail.css';
import HomePage from './component/HomePage';
import Url from './component/Url';
import './Link.css';
import TechSkills from './component/TechSkills';
import './TechSkills.css';
import Experience from './component/Experience';
import './Experience.css';
import Projects from './component/Projects';
import './Projects.css';
import Education from './component/Education';
import './Education.css';
import Interest from './component/Interest';
import './Interest.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <hr></hr>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/personal-details' element={<PersonalDetails/>}/>
          <Route path='/link-details' element={<Url/>}/>
          <Route path='/Technical-skills' element={<TechSkills/>}/>
          <Route path='/work-experience' element={<Experience/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/interest' element={<Interest/>}></Route>
        </Routes>
        </BrowserRouter>

    </div>
  );
}
export default App;
