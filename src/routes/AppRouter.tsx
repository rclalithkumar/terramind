import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "@/pages/LandingPage";
import WorkspacePage from "@/pages/WorkspacePage";
import NotFound from "@/pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/workspace"
          element={<WorkspacePage />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}