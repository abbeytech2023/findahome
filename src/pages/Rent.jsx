import bannerImage from "../assets/images/road-houses.jpg";
import CreatePropertiesToLetForm from "../components/CreatePropertiesToLetForm";
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
import { StyledSubheading } from "../components/HeadingText";

export default function Rent() {
  return (
    <>
      <RentSection className=" bg-no-repeat bg-center bg-cover w-full h-screen">
        <BgOverlay>
          <section
            className={`relative bg-no-repeat bg-center bg-cover w-full items-center justify-center  flex h-screen`}
          >
            <div className="bg-blackOverlay text-4xl font-extrabold text-[#a8c1d1] xl:text-9xl lg:text-8xl md:text-7xl  w-full h-full flex  flex-col justify-center items-center ">
              <h2 className="">Agent.Shops.</h2>
              <h2 className="">Office.Homes.</h2>
            </div>
          </section>
        </BgOverlay>
      </RentSection>
      {/* <div className="mt-64 mb-20 lg:text-5xl">
        <StyledSubheading>Properties to Let</StyledSubheading>
      </div> */}

      <div>
        <PropertiesToLet />
      </div>
      <div className="mt-32">
        <CreatePropertiesToLetForm />
      </div>
    </>
  );
}
