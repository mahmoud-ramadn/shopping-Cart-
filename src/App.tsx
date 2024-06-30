import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shope from "./pages/Shope";
import NavBar from "./components/NavBar/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
const App = () => {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className=" mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shope" element={<Shope />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
