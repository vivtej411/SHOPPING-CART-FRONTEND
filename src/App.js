import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

export default App;
