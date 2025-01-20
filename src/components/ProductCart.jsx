import CartCard from "./CartCard";
import { GridContainer, GridInner } from "./Grid";
import { Heading } from "./HeadingText";
//HOOKS

function ProductCart({ documents, error }) {
  console.log(error);

  // console.log(documents);

  return (
    <div className="mt-40 w-full  flex items-center justify-center px-16 flex-col">
      {error && <p>{error}</p>}
      <Heading as="h2" className="uppercase">
        Properties for sale
      </Heading>
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
