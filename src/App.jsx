import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Editor from "./Pages/Editor/Editor.jsx";
import Landing from "./Pages/Landing/Landing.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/landing" element={<Landing />} />
        {/* Add more routes as needed */}
      </Routes>
  )
}

export default App
