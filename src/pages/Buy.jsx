import styled from "styled-components";
import { BackgroundImage } from "../components/BackgroundImage";
import { BgOverlay } from "../components/BgOverlay";
import ProductCart from "../components/ProductCart";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFetchPropertiesForSale } from "../hooks/useFetchProperties";
import { Heading } from "../components/HeadingText";

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

  // https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYW4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D

  return (
    <>
      <BuySection className=" bg-no-repeat bg-center bg-cover w-full h-screen">
        <BgOverlay>
          <section
            className={`relative bg-no-repeat bg-center bg-cover w-full items-center justify-center  flex h-screen`}
          >
            <div className="  ">
              <Heading className="text-center font-extrabold text-4xl  text-[#d0ebd1] tracking-[4px] xl:text-6xl   md:text-5xl ">
                Agent.Shops. <br /> Office.Homes.
              </Heading>
            </div>
          </section>
        </BgOverlay>
      </BuySection>

      {/* ------------------- BUY RENT SELL SECTION -------------  */}
      <div className="mt-[15rem]">
        {user && (
          <section>
            {documents && <ProductCart documents={documents} />}
          </section>
        )}
      </div>
    </>
  );
}
