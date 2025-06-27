import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./Pages/LandingPage"
import { Business } from "./Pages/Business"

import { Technology } from "./Pages/Technology"
import { Entertainment } from "./Pages/Entertainment"
import { Navbar } from "./Components/Navbar"
import { Health } from "./Pages/Health"
import { Sports } from "./Pages/Sports"
import { Science } from "./Pages/Science"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/science" element={<Science />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </>
  )
}

export default App