import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
