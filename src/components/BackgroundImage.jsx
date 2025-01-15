import styled from "styled-components";
import Image from "../assets/images/bg2.jpg";

export const BackgroundImage = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
