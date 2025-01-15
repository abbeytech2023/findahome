import styled from "styled-components";
import { useAuthContext } from "../hooks/useAuthContext";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoutes({ children }) {
  //Load the authentical user
  const { user } = useAuthContext();

  return !user ? <Navigate to="/signin" /> : <Outlet />;

  //while loading show a spinner
  //   if (isLoading)
  //     return (
  //       <FullPage>
  //         <Spinner />
  //       </FullPage>
  //     );

  // if there is a user render the app
}

export default ProtectedRoutes;
