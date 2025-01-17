import styled from "styled-components";

export const StyledSubheading = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 2.25rem;
`;

export function HeadingText({ text }) {
  return <h1 className="text-8xl ">{text}</h1>;
}
