import CartCard from "./CartCard";
import { GridContainer, GridInner } from "./Grid";
import { Heading } from "./HeadingText";
//HOOKS

function ProductCart({ documents, error }) {
  console.log(error);

  // console.log(documents);

  return (
    <div className=" flex flex-col mt-36 justify-center items-center h-full w-full">
      {error && <p>{error}</p>}
      <Heading as="h2">Your Properties to sell</Heading>
      {documents && (
        <GridContainer>
          <>
            {documents.map((document) => {
              return (
                <GridInner key={document.uid}>
                  <CartCard document={document} />
                </GridInner>
              );
            })}
          </>
        </GridContainer>
      )}
    </div>
  );
}

export default ProductCart;
