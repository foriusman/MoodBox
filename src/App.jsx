import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
