import "./App.css";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  function saludar() {
    alert("hola chiques");
  }

  function funcionLogin() {
    alert("algo importante sobre el login");
  }
  return (
    <div>
      <Navbar conBoton={true} color={"#ddd"} funcionLogin={funcionLogin} />
      <BodyApp />
      <Footer />
    </div>
  );
}
