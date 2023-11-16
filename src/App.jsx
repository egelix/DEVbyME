import Hero from "./components/hero/Hero"
import NavBar from "./components/navbar/NavBar"

function App() {

  return (
  <div>
    <NavBar/>
    <Hero />
    <div className="bg-green-300 h-52 w-screen"></div>
  </div>
  )
}

export default App
