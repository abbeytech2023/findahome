import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";
import { Heading } from "./HeadingText";

const StyledTestimonial = styled.div`
  max-width: 100rem;
  background-color: rgba(119, 119, 119, 0.137);
  background-color: yellow;
  padding: 3rem 2rem;

  height: 35rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;

  /* IN THE END */
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  /* background-color: blue; */
  width: 100%;

  /* text-align: center; */
  display: flex;
  gap: 2rem;
  /* align-items: center;
  justify-content: center; */

  /* THIS creates the animation! */
  transition: transform 2s;
`;

const Carousel = styled.div`
  width: 800px;
  background-color: #087f5b;
  /* margin: 100px auto; */
  margin-top: 4rem;
  border-radius: 8px;
  /* padding: 32px;
        padding-left: 86px;
        padding-right: 48px; */
  padding: 32px 48px 32px 96px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 86px;
  position: relative;
`;

const ButtonRight = styled.button`
  position: absolute;
  right: 0;
  top: 40%;
  transform: translate();
  font-size: 2.4rem;
`;

const ButtonLeft = styled.button`
  position: absolute;
  left: 0;
  top: 40%;
  font-size: 2.4rem;
  /* transform: translate(-50%, -50%); */
`;

export default function Testimonials() {
  return (
    <StyledTestimonial>
      <Heading as="h2" className="mb-8 uppercase">
        testimonials
      </Heading>
      <Slide>
        <Carousel>
          <blockquote>
            <p className="text-[18px] font-medium mb-[32px] text-[#e6fcf5]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis similique distinctio debitis cupiditate sint sed ea
              perferendis eveniet, veniam magni doloremque officia qui
              dignissimos quia in corporis consequuntur ratione culpa quisquam
              vero voluptatem! Ea voluptas totam consequuntur cum sapiente?
            </p>

            <p>comments author</p>
          </blockquote>
        </Carousel>
        <Carousel>
          <blockquote>
            <p className="text-[18px] font-medium mb-[32px] text-[#e6fcf5]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis similique distinctio debitis cupiditate sint sed ea
              perferendis eveniet, veniam magni doloremque officia qui
              dignissimos quia in corporis consequuntur ratione culpa quisquam
              vero voluptatem! Ea voluptas totam consequuntur cum sapiente?
            </p>

            <p>comments author</p>
          </blockquote>
        </Carousel>
      </Slide>
      <ButtonRight>
        <FaAngleRight />
      </ButtonRight>
      <ButtonLeft>
        <FaAngleLeft />
      </ButtonLeft>
    </StyledTestimonial>
  );
}
