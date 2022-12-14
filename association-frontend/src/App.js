import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Association from "./pages/Association"
import Contact from "./pages/Contact"
import Messages from "./pages/Messages"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Association />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App