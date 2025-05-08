import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cartamenu from "../pages/Cartamenu";
import Reservaspage from "../pages/Reservaspage";

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cartamenu" element={<Cartamenu />} />
      <Route path="/reservaspage" element={<Reservaspage />} />
    </Routes>
  )
}

export default AppRoutes;