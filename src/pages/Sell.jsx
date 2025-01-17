import SellImage from "../assets/images/bg5.jpg";
import styled from "styled-components";
import ProductSaleForm from "../components/ProductSaleForm";
import { BgOverlay } from "../components/BgOverlay";
import { useAuthContext } from "../hooks/useAuthContext";
import { Heading } from "../components/HeadingText";

const SellSection = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url(${SellImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default function Sell() {
  const { user } = useAuthContext();
  return (
    <>
      <SellSection>
        <BgOverlay>
          <div className="w-full h-screen flex justify-center text-5xl text-center items-center gap-6 tracking-wider flex-col  /">
            <h2 className="font-extrabold text-[#f7e6e6] tracking-[4px] xl:text-8xl lg:text-7xl sm:font-semibold sm:text-3xl md:text-5xl  ">
              Sell your home with confidence
            </h2>
            <p className="text-[#d2e1e9] font-medium text-2xl sm:text-3xl  ">
              FindAHome is making it simpler to sell your home and move forward.
            </p>
          </div>
        </BgOverlay>
      </SellSection>

      <section>
        <div className="flex basis-2/3 gap-10 px-10  items-center">
          <div className=" flex flex-col py-24 gap-12  ">
            <h2 className="text-2xl font-bold">
              Sell with Our partner agent <br />
              or get a cash offer
            </h2>
            <p className="text-lg  ">
              We help you to sell your home, your way. Easily explore your
              selling options below and get personalized market value estimates
              — we can even help you choose the best option when you’re ready.
              This experience is currently available in select markets across
              Nigeria. Click here to see if its available in your city.
            </p>
          </div>
          {/* <div class=" flex items-center basis-1/3 justify-center md:flex-col"> */}
          <div className=" relative">
            {/* <Image fill src={bg} alt="illusale" quality={70} /> */}
          </div>
        </div>
      </section>
      {user ? (
        <section>
          <ProductSaleForm uid={user.uid} />
        </section>
      ) : (
        <section>
          <ProductSaleForm />
        </section>
      )}
    </>
  );
}
