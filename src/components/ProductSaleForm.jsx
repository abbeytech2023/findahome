import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import Button from "./Button";
import FormRow from "./FormRow";
import StyledInput from "./StyledInput";
import Form from "./Form";
import { Heading, StyledSubheading } from "./HeadingText";

function ProductSaleForm({ uid }) {
  const [propertyDetails, setPropertyDetails] = useState();
  const [address, setAddress] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const { addDocument, response } = useFirestore("Outlets");

  const handleSubmit = (e) => {
    e.preventDefault();

    addDocument({ uid, address, propertyDetails, title, price });
    console.log({ uid, address, propertyDetails, title, price });
    console.log(response);
    console.log(response.success);
  };

  useEffect(() => {
    if (response.success) {
      setTitle("");
      setAddress("");
      setPropertyDetails("");
      setPrice("");
    }
  }, [response.success]);

  return (
    <div className=" ">
      <div className="h-[70rem] flex  flex-col gap-8">
        {/* <Heading as="h2" className="text-center">
          Properties For Sale Form
        </Heading> */}

        <div className="w-full">
          <form
            className="flex items-center justify-center flex-col"
            onSubmit={handleSubmit}
          >
            <FormRow label="property details">
              <StyledInput
                minLength="20"
                className="h-[120px]"
                id="details"
                onChange={(e) => setPropertyDetails(e.target.value)}
                value={propertyDetails}
              />
            </FormRow>
            <FormRow label="Address">
              <StyledInput
                minLength="15"
                className="h-[50px]"
                placeHolder="The location of property"
                id="location"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </FormRow>
            <FormRow label="Title">
              <StyledInput
                minLength="7"
                placeHolder=" The name of the property owner"
                id="state"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormRow>
            <FormRow label="Total-Package">
              <StyledInput
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeHolder="pricing"
                id="price"
              />
            </FormRow>
            <FormRow label="Phone">
              <StyledInput
                minLength="11"
                type="mobile"
                placeHolder="c"
                id="phone"
              />
            </FormRow>

            <FormRow>
              <Button type="primary">
                {response.isPending === "completed" ? (
                  <p>Complete</p>
                ) : (
                  <p>loading...</p>
                )}
              </Button>
            </FormRow>

            {/* {response.isPending && (
              <FormRow>
                <Button type="primary">Loading...</Button>
              </FormRow>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductSaleForm;
