import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hooks/useLogout";
import Logo from "./Logo";
import { useAuthContext } from "../hooks/useAuthContext";

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  padding: 0.4rem 0.2rem;
  text-align: center;
  &:link,
  &:visited {
    color: #fff;
    text-decoration: none;
  }

  &.active {
    color: yellow;
  }

  &:hover {
    background-color: #1e1b1b;
  }
`;

export default function Navigation() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav
      className={"flex justify-between items-center h-28 px-6 bg-[#144c6f] "}
    >
      <div className="flex justify-between items-center basis-1/3">
        <StyledNavLink exact to="/rent">
          Rent
        </StyledNavLink>

        <StyledNavLink to="/sell">Sell</StyledNavLink>

        <StyledNavLink to="/buy">Buy</StyledNavLink>

        <StyledNavLink to="/findanagent">Find an Agent</StyledNavLink>
      </div>
      <NavLink>
        <Logo />
      </NavLink>

      <div className="-800 flex items-center justify-between basis-1/3">
        {user && <StyledNavLink to="/myaccount">My account</StyledNavLink>}

        <StyledNavLink to="advertisement">Advertisement</StyledNavLink>

        {!user && <StyledNavLink to="/signin">Signin</StyledNavLink>}
        {user && (
          <button className="text-white" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

// export default Navigation;
