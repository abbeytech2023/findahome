import CartCard from "./CartCard";
import { GridContainer, GridInner } from "./Grid";
import { Heading } from "./HeadingText";
//HOOKS

function ProductCart({ documents, error }) {
  console.log(error);

  // console.log(documents);

  return (
    <div className="mt-40 px-[3rem] ">
      {error && <p>{error}</p>}
      <Heading as="h2" className=" uppercase text-center">
        Properties for sale
      </Heading>
      {documents && (
        <GridContainer className="">
          <>
            {documents.map((document) => {
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
