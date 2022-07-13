import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import PageNotFound from "./pages/not_found";
import ForgotPassword from "./pages/forgotPassword";
import Terms from "./pages/terms";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="sign_in" element={<Register />} />
            <Route path="terms" element={<Terms />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
