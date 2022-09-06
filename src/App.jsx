import { Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import './App.css';
import Formulario from "./components/form/Form";
import Login from "./components/login/Login";
function App() {
 return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<div>sada</div>}/>
          <Route path="register" element={<Formulario/>}/>
          <Route path="login" element={<Login/>}/>
      <Route/>
    </Routes>
  </>
  )
}

export default App
