import styled from "styled-components";
import { BgOverlay } from "../components/BgOverlay";
import Image from "../assets/images/Image-search.jpg";
import { BackgroundImage } from "../components/BackgroundImage";
import ProductCart from "../components/ProductCart";
import PropertiesToLet from "../components/PropertiesToLet";
import { Heading } from "../components/HeadingText";
import { fetchCollectionToLet } from "../hooks/useCollections";
import { useQuery } from "@tanstack/react-query";
// import { projectAuth } from "../firebase/config";
import {
  useFetchPropertiesForSale,
  useFetchPropertiesTolet,
} from "../hooks/useFetchProperties";

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
  const { documents, isPending } = useFetchPropertiesTolet();

  return (
    <>
      <BackgroundImage>
        <BgOverlay className="h-full w-full flex items-center justify-center">
          <div>
            <Heading
              // as="h3"
              className="text-center font-extrabold text-4xl  text-[#d0ebd1] tracking-[4px]   md:text-5xl "
            >
              The Ultimate Neighborhood Guide. <br /> Discover the Best Places
              to Live
            </Heading>
          </div>
        </BgOverlay>
      </BackgroundImage>

      <section className="mt-[15rem]">
        <div className="mb-[15rem]">
          <PropertiesToLet documents={documents} isPending={isPending} />
        </div>
        <div>
          <ProductCart />
        </div>
      </section>
    </>
  );
}
