import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0 2rem;

  /* width: auto; */
  padding-left: 1.25rem;
  font-size: 1.2rem;

  &::placeholder {
    color: #8e979d;
    font-size: 1.125rem;
  }
`;

export default StyledInput;
