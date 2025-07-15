import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import EditorPage from "./Pages/Editor/EditorPage.jsx";
import LandingPage from "./Pages/Landing/LandingPage.jsx";
import LoadingTestPage from "./Pages/Loading/LoadingTestPage.jsx";

function App() {

  return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/loadingTest" element={<LoadingTestPage />} />
        {/* Add more routes as needed */}
      </Routes>
  )
}

export default App
