import "./App.css";
import BodyApp from "./components/BodyApp";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  function funcionLogin() {
    alert("algo importante sobre el login");
  }
  return (
    <div>
      <Navbar conBoton={true} color={"#ddd"} funcionLogin={funcionLogin} />
      <ItemListContainer greeting={"hola chiques!"} />
      <Footer />
    </div>
  );
}
