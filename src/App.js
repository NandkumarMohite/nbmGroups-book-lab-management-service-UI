
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Signupcomponent from './components/Signupcomponents'
import Logincomponenet from "./components/Logincomponenet";
function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/signuppage" element={<Signupcomponent/>}></Route>
        <Route path="/login" element={<Logincomponenet/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
