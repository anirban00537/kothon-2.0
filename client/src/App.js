import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import What from "./What/What";
import Why from "./Why/Why";
import Map from "./Map/Map";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Home />
        <What />
        <Why />
        <Map />
        <Footer />
      </div>
    </div>
  );
}

export default App;
