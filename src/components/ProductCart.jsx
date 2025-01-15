import CartCard from "./CartCard";
import styled from "styled-components";
import { StyledSubheading } from "./HeadingText";
//HOOKS

const StyledProductCartDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-template-rows: auto;

  grid-gap: 4rem;
  margin-top: 5rem;
`;

function ProductCart({ documents, error }) {
  // console.log(documents);

  return (
    <>
      <section>
        {error && <p>{error}</p>}

        {documents && (
          <StyledProductCartDiv>
            {documents.map((document) => {
              return (
                <div key={document.uid}>
                  <CartCard document={document} />
                </div>
              );
            })}
          </StyledProductCartDiv>
        )}
      </section>
    </>
  );
}

export default ProductCart;
