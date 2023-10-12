import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default MainRoutes;
