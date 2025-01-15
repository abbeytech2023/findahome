import styled from "styled-components";

export const StyledSubheading = styled.div`
  font-weight: 500;
  margin-top: 5rem;
  text-align: center;
`;

export function HeadingText({ text }) {
  return <h1 className="text-8xl ">{text}</h1>;
}
