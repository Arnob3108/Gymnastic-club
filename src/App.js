import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Home></Home>
      <Question></Question>
    </div>
  );
}

export default App;
