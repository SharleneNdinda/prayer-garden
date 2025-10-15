import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import TimerSetting from "./pages/TimerSetting";
import Flower from "./pages/Flower";
import NotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="flower" element={<Flower />} />
        <Route path="timer_setting" element={<TimerSetting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
