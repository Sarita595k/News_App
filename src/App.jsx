import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./Pages/LandingPage"
import { Business } from "./Pages/Business"
import { LifeStyle } from './Pages/LifeStyle'
import { Technology } from "./Pages/Technology"
import { Navbar } from "./Components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/lifeStyle" element={<LifeStyle />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

export default App