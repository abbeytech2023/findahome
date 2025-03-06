import SellImage from "../assets/images/bg5.jpg";
import styled from "styled-components";
import { BgOverlay } from "../components/BgOverlay";
import { useAuthContext } from "../hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";
import { db } from "../firebase/config";
import { fetchCollectionForSale } from "../hooks/useCollections";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../components/Spinner";

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
            <h2 className="font-extrabold text-[#f7e6e6] tracking-[4px]   text-6xl  ">
              Sell your home with confidence
            </h2>
            <p className="text-[#e9f0f3] font-medium text-2xl sm:text-3xl  ">
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
            <p className="text-[1.2rem]  ">
              We help you to sell your home, your way. Easily explore your
              selling options below and get personalized market value estimates
              — we can even help you choose the best option when you’re ready.
              This experience is currently available in select markets across
              Nigeria. Click here to see if its available in your city.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function GetRUms() {
  const { data } = useQuery({
    queryKey: ["Tolet"],
    queryFn: fetchCollectionForSale,
  });

  console.log(data);

  return (
    <div>
      {data &&
        data.map((rum) => {
          return (
            <div
              key={rum.id}
              className="flex items-center justify-center gap-6 mb-11"
            >
              <div>{rum.localGovernment}</div>
              <div>{rum.phoneNumber}</div>
              <div>{rum.propertyDescription}</div>
            </div>
          );
        })}
    </div>
  );
}
