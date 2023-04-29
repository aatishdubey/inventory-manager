import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "@components/BaseLayout";
import Products from "./pages/Products";
import { Login } from "./pages/Login";
import { queryClient } from "./api";
import { Logout } from "./pages/Logout";
import { ProtectedRoute } from "@components/ProtectedRoute";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<ProtectedRoute><Logout /></ProtectedRoute>} />
            <Route path="*" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          </Routes>
        </BaseLayout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
