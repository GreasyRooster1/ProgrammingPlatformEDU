import './App.css'
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<About />} />
        <Route path="/landing" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
  )
}

export default App
