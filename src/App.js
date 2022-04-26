import {
  BrowserRouter as RoutesWrapper,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/HomePage/Home";
import Login from "./pages/LoginPage/Login";
import NotFound from "./pages/NotFoundPage/NotFound";
import Register from "./pages/RegisterPage/Register";

function App() {
  return (
    <RoutesWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RoutesWrapper>
  );
}

export default App;
