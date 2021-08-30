import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

// JSX: Javascript XML

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
