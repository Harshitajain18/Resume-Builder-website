
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Signin from './component/Signin';
import PersonalDetails from './component/PersonalDetails';
import HomePage from './component/HomePage';
import Url from './component/Url';
import TechSkills from './component/TechSkills';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Education from './component/Education';
import Interest from './component/Interest';
import Stepper from './component/Stepper';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>   
      <hr></hr>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/resume' element={<Stepper/>} />
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
