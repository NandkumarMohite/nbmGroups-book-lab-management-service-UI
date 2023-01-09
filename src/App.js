
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Signupcomponent from './components/Signupcomponents'
import Login from "./components/login";
function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/signuppage" element={<Signupcomponent/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
