import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hooks/useLogout";
import Logo from "./Logo";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import MyAccountLinks from "./MyAccountLinks";
import { FaAngleDown } from "react-icons/fa";

export const StyledNavLink = styled(NavLink)`
  padding: 0.4rem 0.2rem;
  text-align: center;
  font-size: 0.9rem;
  &:link,
  &:visited {
    /* color: #fff; */
    text-decoration: none;
  }

  &.active {
    color: #f2f203;
  }

  &:hover {
    background-color: #1e1b1b;
  }
`;

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav
      className={
        "flex justify-between text-white items-center h-28 px-6 bg-[#144c6f]  "
      }
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

      <div className="flex items-center justify-between  basis-1/3">
        {user && (
          <>
            <div
              className=" gap-4 flex  flex-col"
              onClick={() => setIsOpen((open) => !open)}
            >
              <div className={`text-white flex  `}>
                <button>My account</button>
                <FaAngleDown className="text-white mt-2" />
              </div>
            </div>
            {isOpen && (
              <div
                className="absolute top-[6rem]"
                onClick={() => setIsOpen(false)}
              >
                <MyAccountLinks bgColor="#144c6f" color="#fff" />
              </div>
            )}
          </>
        )}

        <StyledNavLink to="advertisement">Advertisement</StyledNavLink>

        {!user && <StyledNavLink to="/signin">Signin</StyledNavLink>}
        {user && (
          <button className="text-white  hover:bg-[#1e1b1b]" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

// export default Navigation;
