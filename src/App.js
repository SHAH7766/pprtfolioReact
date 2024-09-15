import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Introduction from "./Screens/Introduction";
import Contact from "./Screens/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/con" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
