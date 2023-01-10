
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Signupcomponent from './components/Signupcomponents'
import Logincomponenet from "./components/Logincomponenet";
import Deleteuserinformationcomponent from "./components/Deleteuserinformationcomponent"
function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/signuppage" element={<Signupcomponent/>}></Route>
        <Route path="/login" element={<Logincomponenet/>}></Route>
        <Route path="/deleteuserinformation" element={<Deleteuserinformationcomponent/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
