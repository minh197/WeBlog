import './App.css';
import SignUp from './components/Auth/SignUp'
import LogIn from "./components/Auth/LogIn"
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
