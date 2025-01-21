import styled from "styled-components";
import { BgOverlay } from "../components/BgOverlay";
import Image from "../assets/images/Image-search.jpg";
import { BackgroundImage } from "../components/BackgroundImage";
import ProductCart from "../components/ProductCart";
import { useCollection } from "../hooks/useCollection";
import PropertiesToLet from "../components/PropertiesToLet";
// import { projectAuth } from "../firebase/config";

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
  const { documents, error } = useCollection("Outlets");
  return (
    <>
      <BackgroundImage>
        <BgOverlay className="h-full w-full flex items-center justify-center">
          <h1 className="text-center font-medium text-3xl  text-[#d0ebd1] tracking-[4px] lg:text-7xl sm:font-semibold sm:text-4xl md:text-5xl  ">
            The Ultimate Neighborhood Guide. <br /> Discover the Best Places to
            Live
          </h1>
        </BgOverlay>
      </BackgroundImage>

      <section>
        <div>
          <PropertiesToLet />
        </div>
        <ProductCart documents={documents} error={error} />
      </section>
    </>
  );
}
