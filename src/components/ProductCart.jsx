import CartCard from "./CartCard";
import { GridContainer, GridInner } from "./Grid";
import { Heading } from "./HeadingText";
//HOOKS

function ProductCart({ documents, error }) {
  // console.log(documents);

  return (
    <div className="px-[3rem] mb-[20rem] ">
      {error && <p>{error}</p>}
      <Heading as="h2" className=" uppercase text-center mb-16">
        Properties for sale
      </Heading>
      {documents && (
        <GridContainer className="">
          <>
            {documents.map((document) => {
              console.log(document.uid);

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
