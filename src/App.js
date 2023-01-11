
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './script.js';
import Signupcomponent from './components/Signupcomponents'
import Logincomponenet from "./components/Logincomponenet";
import Deleteuserinformationcomponent from "./components/Deleteuserinformationcomponent"
import Headercomponent from "./components/Headercomponent"
import Welcomecomponent from "./components/Welcomecomponent"
import Footercomponent from "./components/Footercomponent";
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
      </Routes>
      <Footercomponent/>
    </BrowserRouter>
    </>
  );
}

export default App;

