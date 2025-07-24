import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Terms from "./pages/Terms"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ERP-Terms" element={<Terms/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
