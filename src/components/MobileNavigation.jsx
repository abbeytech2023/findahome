import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./Logo";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { BiFileFind } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RiAdvertisementLine, RiLogoutBoxRLine } from "react-icons/ri";
import { BiHomeSmile } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { TbHomeSearch } from "react-icons/tb";

const StyledMainNav = styled.nav`
  .main-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    /* background-color: transparent; */
    /* top: 2;
    left: 0; */
    width: 100%;
    height: 100vh;
    font-weight: 700;
    transform: translateY(-100%);
    transition: all 0.3s ease-in;
    visibility: hidden;
    pointer-events: none;
    /* z-index: 2; */
  }
`;

const StyledMainNavList = styled.div`
  display: flex;
  flex-direction: column;

  text-decoration: none;

  list-style: none;

  & a {
    border-bottom: 1px solid #510a0a;
    padding: 1rem 2rem;
    color: #fff;
  }

  & a.active {
    color: #fff;
  }

  & a.active:hover {
    background-color: #c7c736;
  }

  & a:hover {
    background-color: #000;
  }
`;

const StyledNavLink = styled(NavLink)`
  /* font-size: 1rem; */
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;

  color: #222;
`;

const StyledIconDiv = styled.div`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
`;

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  let numref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!numref.current.contains(event.target)) {
        setIsOpen(false);
      }
    });
  }, []);

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <StyledMainNav className="xl:hidden  lg:hidden px-2 py-4 flex items-center justify-between relative  xl:text-4xl sm:text-2xl bg-[#43525b]  text-[#fff]">
        <NavLink to="/" className="  top-3 left-4 ">
          <Logo type="mobile" />
        </NavLink>
        <div>
          <div className="justify-between xl:hidden text-4xl lg:hidden mr-4 ">
            {!isOpen && (
              <GiHamburgerMenu
                className={" ml-auto xl:text-7xl"}
                onClick={handleIsOpen}
              />
            )}
            {
              <IoCloseSharp
                className={
                  !isOpen ? "hidden" : "ml-auto xl:text-7xl  sm:text-2xl  "
                }
                onClick={() => setIsOpen(!isOpen)}
              />
            }
          </div>
        </div>
      </StyledMainNav>
      <div
        className="z-40 bg-[#144c6f] text-lg"
        ref={numref}
        onClick={handleIsOpen}
      >
        {isOpen && <Navigation />}
      </div>
    </>
  );
}

export default MobileNavigation;

function Navigation() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="lg:hidden xl:hidden h-screen ">
      <StyledMainNavList>
        {/* {user && ( */}
        <StyledNavLink to="/myaccount">
          <div>My account</div>
          <StyledIconDiv>
            <CgProfile />
          </StyledIconDiv>
        </StyledNavLink>
        {/* )} */}

        <StyledNavLink to="/rent">
          <div>Rent</div>
          <StyledIconDiv>
            <TbHomeSearch />
          </StyledIconDiv>
        </StyledNavLink>

        <StyledNavLink to="/sell">
          <div>Sell</div>
          <StyledIconDiv>
            <MdOutlineSell />
          </StyledIconDiv>
        </StyledNavLink>

        <StyledNavLink to="/buy">
          <div> Buy</div>
          <StyledIconDiv>
            <BiHomeSmile />
          </StyledIconDiv>
        </StyledNavLink>

        <StyledNavLink to="/findanagent">
          <div> Find an Agent</div>
          <StyledIconDiv>
            <BiFileFind />
          </StyledIconDiv>
        </StyledNavLink>

        <StyledNavLink to="/">
          <div>Advertisement </div>
          <StyledIconDiv>
            <RiAdvertisementLine />
          </StyledIconDiv>
        </StyledNavLink>

        {!user && (
          <StyledNavLink to="/signin">
            <div> Signin </div>
          </StyledNavLink>
        )}

        {user && (
          <Link
            to="/signin"
            className="flex justify-between text-[#2d0808]"
            onClick={logout}
          >
            <div>Logout</div>

            <StyledIconDiv>
              <RiLogoutBoxRLine />
            </StyledIconDiv>
          </Link>
        )}
      </StyledMainNavList>
    </nav>
  );
}
