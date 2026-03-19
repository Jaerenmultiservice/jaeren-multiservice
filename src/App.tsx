import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// TAK
import Takvask from "./pages/Takvask";
import Takrens from "./pages/tak/Takrens";
import TakImpregnering from "./pages/tak/TakImpregnering";

// HAGE
import Hage from "./pages/Hage";
import Hekk from "./pages/hage/Hekk";
import Rydding from "./pages/hage/Rydding";

// GRAVING
import Graving from "./pages/Graving";
import Planering from "./pages/graving/Planering";
import Drenering from "./pages/graving/Drenering";

// SMART
import Smarthjem from "./pages/Smarthjem";
import SmarthjemInstallasjon from "./pages/smart/Installasjon";
import SmarthjemFeilsok from "./pages/smart/Feilsok";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* TAK */}
        <Route path="/takvask" element={<Takvask />} />
        <Route path="/takvask/takrens" element={<Takrens />} />
        <Route path="/takvask/impregnering" element={<TakImpregnering />} />

        {/* HAGE */}
        <Route path="/hagearbeid" element={<Hage />} />
        <Route path="/hagearbeid/hekk" element={<Hekk />} />
        <Route path="/hagearbeid/rydding" element={<Rydding />} />

        {/* GRAVING */}
        <Route path="/graving" element={<Graving />} />
        <Route path="/graving/planering" element={<Planering />} />
        <Route path="/graving/drenering" element={<Drenering />} />

        {/* SMART */}
        <Route path="/smarthjem" element={<Smarthjem />} />
        <Route path="/smarthjem/installasjon" element={<SmarthjemInstallasjon />} />
        <Route path="/smarthjem/feilsok" element={<SmarthjemFeilsok />} />
      </Routes>
    </Router>
  );
}

export default App;
