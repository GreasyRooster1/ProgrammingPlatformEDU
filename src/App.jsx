import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import EditorPage from "./Pages/Editor/EditorPage.jsx";
import LandingPage from "./Pages/Landing/LandingPage.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* Add more routes as needed */}
      </Routes>
  )
}

export default App
