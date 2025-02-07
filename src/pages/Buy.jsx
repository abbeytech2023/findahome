import { BackgroundImage } from "../components/BackgroundImage";
import { BgOverlay } from "../components/BgOverlay";
import ProductCart from "../components/ProductCart";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollections } from "../hooks/useCollections";

export default function Buy() {
  const { user } = useAuthContext();
  const { documents, error } = useCollections("Outlets");

  return (
    <>
      <BackgroundImage>
        <BgOverlay>
          <section
            className={`relative bg-no-repeat bg-center bg-cover w-full items-center justify-center  flex h-screen`}
          >
            <div className="bg-blackOverlay text-6xl font-extrabold text-[#a8c1d1]  w-full h-full flex  flex-col justify-center items-center ">
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
