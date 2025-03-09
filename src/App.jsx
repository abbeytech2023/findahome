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
import Root from "./components/Root";
import AnonymousRoute from "./components/AnonymousRoute";
import MyAccount from "./pages/MyAccount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  const { authIsReady, user } = useAuthContext();
  // const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      {authIsReady && (
        <BrowserRouter className="relative">
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />
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
              <Root />
            </div>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "#f4eaea",
                  color: "black",
                },
              }}
            />
          </QueryClientProvider>
        </BrowserRouter>
      )}
    </div>
  );
}
