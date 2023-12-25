import { useState } from "react"
import Create from "./components/Create"
import Show from "./components/Show"
import Nav from "./components/Nav";
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";


function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
        <Route path="/show/details/:title" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
