import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import IMAGE from "../assets/images/Logo.jpg";

const StyledLogo = styled(NavLink)`
  background-color: black;
  font-weight: 900;
  text-align: center;
  align-self: center;
  flex-basis: 3rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;
/* font-size: 1.5rem; */

export default function Logo({ type }) {
  return (
    <StyledLogo type={type} className={``}>
      <Link to="/">
        <img src={IMAGE} width="50px" height="64px" />
      </Link>
    </StyledLogo>
  );
}
