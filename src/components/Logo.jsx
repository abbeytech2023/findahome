import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "styled-components";

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
        <span className={`text-[#a8c1d1]`}>FIND</span>
        <span className="text-red-400">A</span>
        <span className=" text-[#fff]">HOME</span>
      </Link>
    </StyledLogo>
  );
}
