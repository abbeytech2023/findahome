import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 4rem;
  padding: 0 2rem;
`;

// .work {
//   border-radius: 1rem;
//   position: relative;
//   overflow: hidden;
//   box-shadow: 7px 3px 8px rgba(85, 85, 85, 0.487);
// }

export const GridInner = styled.div`
  border-radius: 1rem;
  background-color: #fff;
  /* width: 100%; */
  position: relative;
  overflow: hidden;
  box-shadow: 7px 3px 8px rgba(85, 85, 85, 0.487);
  height: 100%;
`;
