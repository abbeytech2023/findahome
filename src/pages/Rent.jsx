import bannerImage from "../assets/images/road-houses.jpg";
import PropertiesToLet from "../components/PropertiesToLet";

import styled from "styled-components";

const RentSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${bannerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

import { BgOverlay } from "../components/BgOverlay";
import { Heading, StyledSubheading } from "../components/HeadingText";
import { useFetchPropertiesTolet } from "../hooks/useFetchProperties";

export default function Rent() {
  const { propToLet, isPending } = useFetchPropertiesTolet();
  return (
    <>
      <RentSection className=" bg-no-repeat bg-center bg-cover w-full h-screen">
        <BgOverlay>
          <section
            className={`relative bg-no-repeat bg-center bg-cover w-full items-center justify-center  flex h-screen`}
          >
            <div className="text-center w-full h-full flex  flex-col justify-center items-center ">
              <Heading as="h1" className="text-6xl font-bold text-[#a8c1d1] ">
                Get Ready to move,
              </Heading>
              <p className="text-[#b9d0de] text-2xl sm:text-3xl mt-5">
                your step by step guide to a stress free relocation
              </p>
            </div>
          </section>
        </BgOverlay>
      </RentSection>
      {/* <div className="mt-64 mb-20 lg:text-5xl">
        <StyledSubheading>Properties to Let</StyledSubheading>
      </div> */}

      <div className="mt-[15rem]">
        <PropertiesToLet propToLet={propToLet} isPending={isPending} />
      </div>
      {/* <div className="mt-32">
        <CreatePropertiesToLetForm />
      </div> */}
    </>
  );
}
