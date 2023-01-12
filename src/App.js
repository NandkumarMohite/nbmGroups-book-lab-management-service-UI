
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';    
import './script.js';
import Signupcomponent from './components/Signupcomponents'
import Logincomponenet from "./components/Logincomponenet";
import Deleteuserinformationcomponent from "./components/Deleteuserinformationcomponent"
import Headercomponent from "./components/Headercomponent"
import Welcomecomponent from "./components/Welcomecomponent"
import Footercomponent from "./components/Footercomponent";
import Userprofilecomponent from "./components/Userprofilecomponent";
import { ToastContainer, toast } from 'react-toastify'; 

function App() {
 
  return (
    <>
  

    <BrowserRouter>
    <Headercomponent/>
      <Routes>
      <Route path="/" element={<Welcomecomponent/>}></Route>
        <Route path="/signuppage" element={<Signupcomponent/>}></Route>
        <Route path="/login" element={<Logincomponenet/>}></Route>
        <Route path="/deleteuserinformation" element={<Deleteuserinformationcomponent/>}></Route>
        <Route path="/userprofile" element={<Userprofilecomponent/>}></Route>
      </Routes>
      <Footercomponent/>
      <ToastContainer />    
    </BrowserRouter>
    </>
  );
}

export default App;

