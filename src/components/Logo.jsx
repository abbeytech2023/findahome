import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLogo = styled(NavLink)`
  background-color: #1c1818;
  font-weight: 900;
  text-align: center;
  align-self: center;
  font-size: 1.5rem;
  flex-basis: 3rem;
  letter-spacing: 2px;
`;

export default function Logo() {
  return (
    <StyledLogo to="/">
      <span className="text-[#a8c1d1]">FIND</span>
      <span className="text-red-400">A</span>
      <span className=" text-[#fff]">HOME</span>
    </StyledLogo>
  );
}
