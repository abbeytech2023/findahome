import { useQuery } from "@tanstack/react-query";
import CartCard from "./CartCard";
import { GridContainer, GridInner } from "./Grid";
import { Heading } from "./HeadingText";
import { fetchCollectionForSale } from "../hooks/useCollections";
import { data } from "autoprefixer";
import Spinner from "./Spinner";
import SpinnerMini from "./SpinnerMini";
//HOOKS

function ProductCart() {
  const { data: documents, isPending } = useQuery({
    queryKey: ["Outlet"],
    queryFn: fetchCollectionForSale,
  });

  return (
    <div className="px-[3rem] mb-[20rem] ">
      {/* {error && <p>{error}</p>} */}
      <Heading as="h2" className=" uppercase text-center mb-16">
        Properties for sale
      </Heading>
      {isPending && <SpinnerMini />}
      {documents && (
        <GridContainer className="">
          <>
            {documents.map((document) => {
              // console.log("doc: ", document.uid);

              return (
                <div key={document.uid}>
                  <CartCard document={document} />
                </div>
              );
            })}
          </>
        </GridContainer>
      )}
    </div>
  );
}

export default ProductCart;
