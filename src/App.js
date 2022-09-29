import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Home></Home>
    </div>
  );
}

export default App;
