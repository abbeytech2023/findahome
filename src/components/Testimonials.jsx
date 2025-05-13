import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";
import { Heading } from "./HeadingText";
import { useState } from "react";
import Carousel from "./Carousel";

const StyledTestimonial = styled.div`
  /* max-width: 100rem; */
  /* background-color: rgba(119, 119, 119, 0.137); */
  /* padding: 3rem 2rem; */

  height: 35rem;
  /* margin: 0 auto; */
  margin-top: 6rem;

  /* position: relative; */
  display: flex;
  /* justify-content: center; */

  /* IN THE END */
  overflow: hidden;
`;

const Slider = styled.div`
  width: 100rem;
  height: 50rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  background-color: yellow;
  /* IN THE END */
  /* overflow: hidden; */
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  background-color: blue;
  width: 100rem;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* THIS creates the animation! */
  transition: transform 2s;
`;

// const Carousel = styled.div`
//   width: 800px;
//   background-color: #087f5b;
//   margin: 100px auto;
//   border-radius: 8px;
//   /* padding: 32px;
//         padding-left: 86px;
//         padding-right: 48px; */
//   padding: 32px 48px 32px 96px;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   gap: 86px;
//   position: relative;
// `;

const ButtonRight = styled.button`
  background-color: red;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  position: absolute;
`;

const ButtonLeft = styled.button`
  background-color: blue;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const comments = [
  {
    author: "adebayo",
    id: "1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adisicing elit. Repellendus esse fuga beatae facere inventore, ratione itaque dolor non! Sit, ut.",
  },
  {
    author: "remilekun",
    id: "2",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus es fuga beatae facere inventore, ratione itaque dolor non! Sit, ut.",
  },
  {
    author: "adebimpe",
    id: "3",
    comment:
      "Lorem ipsumr  sit amet consectetur adipisicing elit. Repellendus esse fuga beatae facere inventore, ratione itaque dolor non! Sit, ut.",
  },
  {
    author: "ogunmefun",
    id: "4",
    comment:
      "Lorem ipsum dolor sit amet consectet adipisicing elit. Repellndus esse fuga beatae facere inventore, ratione itaque dolor non! Sit, ut.",
  },
  {
    author: "abubakar",
    id: "5",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus  fuga beatae facere inventore, ratione itaque dolor non! Sit, ut.",
  },
];

export default function Testimonials() {
  console.log(comments);

  return (
    <div>
      <Carousel comments={comments} />;
    </div>
  );
}
