import styled from "styled-components";
import { BgOverlay } from "../components/BgOverlay";
import Image from "../assets/images/Image-search.jpg";
import { BackgroundImage } from "../components/BackgroundImage";
import ProductCart from "../components/ProductCart";
import { useCollections } from "../hooks/useCollections";
import PropertiesToLet from "../components/PropertiesToLet";
import { Heading } from "../components/HeadingText";
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
  const { documents, error } = useCollections("Outlets");
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

      <section>
        <div>
          <PropertiesToLet />
        </div>
        <ProductCart documents={documents} error={error} />
      </section>
    </>
  );
}
