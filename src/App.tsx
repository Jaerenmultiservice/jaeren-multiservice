import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Takvask from "./pages/Takvask";
import TakvaskUnderside from "./pages/tak/TakvaskUnderside";
import TakrensNested from "./pages/tak/Takrens";
import Mosefjerning from "./pages/Mosefjerning";
import TakImpregnering from "./pages/tak/TakImpregnering";

import Hage from "./pages/Hage";
import HekkeklippFlat from "./pages/Hekkeklipp";
import Plenklipp from "./pages/Plenklipp";
import Hagevedlikehold from "./pages/Hagevedlikehold";
import RyddingFlat from "./pages/Rydding";

import Graving from "./pages/Graving";
import GravingTjeneste from "./pages/graving/GravingTjeneste";
import DreneringNested from "./pages/graving/Drenering";
import Oppkjor from "./pages/graving/Oppkjor";
import Tomtearbeid from "./pages/graving/Tomtearbeid";

import Smarthjem from "./pages/Smarthjem";
import Smarthus from "./pages/Smarthus";
import Wifi from "./pages/Wifi";
import PcHjelp from "./pages/smart/PcHjelp";
import Feilsoking from "./pages/Feilsoking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/takvask" element={<Takvask />} />
        <Route path="/takvask/takvask" element={<TakvaskUnderside />} />
        <Route path="/takvask/takrens" element={<TakrensNested />} />
        <Route path="/takvask/mosefjerning" element={<Mosefjerning />} />
        <Route path="/takvask/impregnering" element={<TakImpregnering />} />

        <Route path="/hagearbeid" element={<Hage />} />
        <Route path="/hagearbeid/hekkeklipp" element={<HekkeklippFlat />} />
        <Route path="/hagearbeid/plenklipp" element={<Plenklipp />} />
        <Route path="/hagearbeid/hagevedlikehold" element={<Hagevedlikehold />} />
        <Route path="/hagearbeid/rydding" element={<RyddingFlat />} />

        <Route path="/graving" element={<Graving />} />
        <Route path="/graving/graving" element={<GravingTjeneste />} />
        <Route path="/graving/drenering" element={<DreneringNested />} />
        <Route path="/graving/oppkjoring" element={<Oppkjor />} />
        <Route path="/graving/tomtearbeid" element={<Tomtearbeid />} />

        <Route path="/smarthjem" element={<Smarthjem />} />
        <Route path="/smarthjem/smarthus" element={<Smarthus />} />
        <Route path="/smarthjem/wifi" element={<Wifi />} />
        <Route path="/smarthjem/pc" element={<PcHjelp />} />
        <Route path="/smarthjem/feilsoking" element={<Feilsoking />} />
      </Routes>
    </Router>
  );
}

export default App;
