import Home from "./Screens/Home";
import Servicios from "./Screens/Servicios";
import HowWeWork from "./Screens/HowWeWork";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Servicios />
      <HowWeWork />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
