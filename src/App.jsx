import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
