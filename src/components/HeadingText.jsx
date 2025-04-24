import styled, { css } from "styled-components";

export const text = css`
  text-align: center;
`;

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      /* font-size: 2rem; */
      font-weight: 700;
      color: #a8c1d1;
      line-height: 1.1;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: #144c6f;
      text-align: center;
    `}

${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: blue;
    `}

${(props) =>
    props.as === "h4" &&
    css`
      font-weight: 600;
      text-align: center;
      color: #144c6f;
    `}

${(props) =>
    props.as === "h5" &&
    css`
      color: (props => props.color);
      font-size: 1.4rem;
      font-weight: 600;
      text-align: center;
      color: #144c6f;
    `}

line-height: 1.4
`;

export const StyledSubheading = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: 2.25rem;
`;

export function HeadingText({ text }) {
  return <h1>{text}</h1>;
}
