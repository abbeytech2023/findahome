import styled from "styled-components";
import { BgOverlay } from "../components/BgOverlay";
import ProductCart from "../components/ProductCart";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchPropertiesForSale } from "../hooks/useFetchProperties";
import { Heading } from "../components/HeadingText";
import { StyledSpinner } from "../components/Spinner";

export default function Buy() {
  const { user } = useAuthContext();
  const { documents } = useFetchPropertiesForSale();

  const BuySection = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${"https://homejab.com/wp-content/uploads/2024/10/bailey-rytenskild-98AFCtbmKP0-unsplash-1024x576.jpg "});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `;

  return (
    <>
      <BuySection className=" bg-no-repeat bg-center bg-cover w-full h-screen">
        <BgOverlay>
          <section
            className={`relative bg-no-repeat bg-center bg-cover w-full items-center justify-center  flex h-screen`}
          >
            <div className="">
              <Heading className="text-center font-extrabold text-4xl  text-[#b8daf4] tracking-[4px] xl:text-6xl   md:text-5xl ">
                Get Ready to move
              </Heading>
              <p className="text-[#c9eaeec9] text-center text-2xl sm:text-3xl mt-5">
                your step by step guide to a stress free relocation
              </p>
            </div>
          </section>
        </BgOverlay>
      </BuySection>

      {/* ------------------- BUY RENT SELL SECTION -------------  */}
      <div className="mt-[15rem]">
        {!documents ? (
          <StyledSpinner />
        ) : (
          <section>
            {documents && <ProductCart documents={documents} />}
          </section>
        )}
      </div>
    </>
  );
}
