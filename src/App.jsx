import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Rent from "./pages/Rent";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import FindAnAgent from "./pages/FindAnAgent";
import Advertisement from "./pages/Advertisement";
import { useAuthContext } from "./hooks/useAuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AnonymousRoute from "./components/AnonymousRoute";
import MyAccount from "./pages/MyAccount";

export default function App() {
  const { authIsReady, user } = useAuthContext();
  // const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      {authIsReady && (
        <BrowserRouter className="relative">
          <>
            <div>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={<Navigate replace to="/dashboard" />}
                />
                <Route path="/sell" element={<Sell />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/findanagent" element={<FindAnAgent />} />
                {/* <Route element={<ProtectedRoutes />}> */}
                <Route path="/myaccount" element={<MyAccount />} />
                {/* </Route> */}
                <Route path="/advertisement" element={<Advertisement />} />
                <Route element={<AnonymousRoute />}>
                  <Route path="/signin" element={<SignIn />} />
                </Route>
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}
