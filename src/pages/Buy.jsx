import { BackgroundImage } from "../components/BackgroundImage";
import { BgOverlay } from "../components/BgOverlay";
import { StyledSubheading } from "../components/HeadingText";
import ProductCart from "../components/ProductCart";
import StarRating123 from "../components/StarRating";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import FindAgent from "../components/FindAgent";

export default function Buy() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("Outlets");

  return (
    <>
      <BackgroundImage>
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
      </BackgroundImage>

      {/* ------------------- BUY RENT SELL SECTION -------------  */}

      {user && (
        <section>
          <ProductCart uid={user.uid} documents={documents} error={error} />
        </section>
      )}
      {/* {!user && (
        <>
          <section>
            <ProductCart documents={documents} error={error} />
          </section>
        </>
      )} */}
    </>
  );
}
