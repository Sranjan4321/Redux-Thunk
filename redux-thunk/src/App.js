import "./App.css";
import Home from "./redux-hook/components/Home";
// import Login from "./redux-hook/login/Login";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
