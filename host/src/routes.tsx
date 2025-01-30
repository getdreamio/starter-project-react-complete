import { Routes, Route } from "react-router";
import { useNavigate } from "react-router-dom";
import { DreamMFAuthRoute } from "@dream.mf/oidc";

import Index from "./pages";
import Sample from "./pages/sample";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Logout from "./pages/logout";
import LoginPage from "./pages/login";

const Routing = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/sample/:id" element={<Sample />} />
      {/* AUTHENTICATION */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth" element={<DreamMFAuthRoute onBeforeRedirect={() => {}} navigate={navigate} loginMessage={'Logging you in...'} />} />
      <Route path="/logout" element={<Logout />} />
      {/* ELSE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Routing;