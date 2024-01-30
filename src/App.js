import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Uploading from "./pages/Uploading";
import Uploaded from "./pages/Uploaded";
import Upload from "./pages/Upload";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/uploading" element={<Uploading />} />
      <Route path="/uploaded" element={<Uploaded />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}
export default App;
