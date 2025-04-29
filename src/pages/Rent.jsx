import bannerImage from "../assets/images/road-houses.jpg";
import PropertiesToLet from "../components/PropertiesToLet";

import styled from "styled-components";

const RentSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${"https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYW4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D"});
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
              <Heading className="text-center font-extrabold text-4xl  text-[#f088e4] xl:tracking-[2px] xl:text-6xl   md:text-5xl ">
                Agent.Shops. <br /> Office.Homes.
              </Heading>
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
