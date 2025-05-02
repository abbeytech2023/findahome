import styled from "styled-components";
import { BgOverlay } from "../components/BgOverlay";
import Image from "../assets/images/Image-search.jpg";
import { BackgroundImage } from "../components/BackgroundImage";
import { GridInner } from "../components/Grid";
import { Heading } from "../components/HeadingText";
import IconBuy from "../assets/images/illusale.jpg";
import IconSell from "../assets/images/hand-shake.jpg";
import IconRent from "../assets/images/see-through.jpg";

const GridContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
  padding: 3rem 2rem;
  background-color: rgba(119, 119, 119, 0.137);
`;

const StyledIconDiv = styled.div`
  width: 14rem;
  height: 13rem;
`;

//<Link className="border-2 border-black block w-[70%] mt-[3rem] h-[4rem]"></Link>

const StyledLinkButton = styled(Link)`
  border: 1px solid #144c6f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #144c6f;
  font-weight: 500;
  text-align: center;
  width: 12rem;
  height: 10%;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 2rem 0.3rem;
`;

import {
  useFetchPropertiesForSale,
  useFetchPropertiesTolet,
} from "../hooks/useFetchProperties";
import { Link } from "react-router-dom";

const Section = styled.section`
  color: blue;
  /* width: 1200px; */
  height: 100vh;
  background-image: url(${Image});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
`;

export default function Dashboard() {
  // const { propToLet, isPending } = useFetchPropertiesTolet();

  // const { documents } = useFetchPropertiesForSale();

  return (
    <>
      <BackgroundImage className="flex items-center justify-center">
        {/* <BgOverlay className="h-full w-full flex items-center justify-center"> */}
        <div>
          <Heading
            // as="h3"
            className="text-center font-extrabold text-4xl  text-[rgb(178,220,255)] tracking-[4px]   md:text-5xl "
          >
            The Ultimate Neighborhood Guide. <br /> Discover the Best Places to
            Live
          </Heading>
        </div>
        {/* </BgOverlay> */}
      </BackgroundImage>

      <section className="mt-[8rem] text-center">
        {/* <Heading as="h5">Our Services</Heading> */}
        <GridContainer className="">
          <GridInner className=" flex flex-col items-center justify-center gap-3">
            <StyledIconDiv className="flex items-center min-[0px]:h-[7rem] xl:h-[13rem] lg:h-[11rem] md:h-[8rem] sm:h-[7rem]">
              <img src={`${IconSell}`} />
            </StyledIconDiv>
            <Heading as="h5" className="font-bold text-3xl">
              Buy A Home
            </Heading>
            <p className="text-[19px] h-[20%] px-5">
              Find your dream home today! Expert guidance, endless options and
              unbeatable prices your perfect haven awaits start searching now
              and make it yours
            </p>
            <StyledLinkButton to="/findanagent">
              Find a local agent
            </StyledLinkButton>
          </GridInner>
          <GridInner className=" flex flex-col items-center justify-center gap-3">
            <StyledIconDiv className="flex items-center min-[0px]:h-[7rem] xl:h-[15rem] lg:h-[12rem] md:h-[8rem] sm:h-[7rem]">
              <img src={`${IconBuy}`} />
            </StyledIconDiv>
            <Heading as="h5" className="font-bold text-3xl">
              Sell A Home
            </Heading>
            <p className="text-[19px] h-[20%] px-5">
              Sell a home fast and stress free, get top payment with expert
              marketing global reach and personalized services, get a quote
              today and sell with confidence
            </p>
            <StyledLinkButton to="/sell">See your options</StyledLinkButton>
          </GridInner>
          <GridInner className=" flex flex-col items-center justify-center gap-3">
            <StyledIconDiv className="flex items-center min-[0px]:h-[7rem] xl:h-[15rem] lg:h-[12rem] md:h-[8rem] sm:h-[7rem]">
              <img src={`${IconRent}`} />
            </StyledIconDiv>
            <Heading Heading as="h5" className="font-bold text-3xl">
              Rent A Home
            </Heading>
            <p className="text-[21px] h-[20%] px-5">
              Rent your dream home today! Luxury, comfort, and convenience -
              explore top listings and find your perfect space with ease and
              simplicity.
            </p>
            <StyledLinkButton to="/rent">Find Rentals</StyledLinkButton>
          </GridInner>
        </GridContainer>
      </section>
    </>
  );
}
