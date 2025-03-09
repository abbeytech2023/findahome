import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const StyledSpinner = styled(BiLoaderAlt)`
  margin: 4.8rem auto;

  width: 6.4rem;
  height: 100px;
  aspect-ratio: 1;
  /* border-radius: 50%; */
  /* background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0); */
  animation: ${rotate} 1.5s infinite linear;
`;

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(111, 18, 18, 0.524);
`;

const Spinner = () => {
  return (
    <StyledOverlay className="flex justify-center items-center">
      <StyledSpinner />
    </StyledOverlay>
  );
};

export default Spinner;
