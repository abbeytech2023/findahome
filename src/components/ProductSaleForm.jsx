import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";
import Button from "./Button";
import FormRow from "./FormRow";
import StyledInput from "./StyledInput";

function ProductSaleForm({ uid }) {
  const [propertyDetails, setPropertyDetails] = useState();
  const [address, setAddress] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const { addDocument, response } = useFirestore("Outlets");

  const handleSubmit = (e) => {
    e.preventDefault();

    // addDocument({ uid, address, propertyDetails, title, price });
    console.log({ uid, address, propertyDetails, title, price });
    console.log(response.isPending);
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
    <div className=" w-full mb-9 ">
      <div className=" flex">
        <div className="w-full">
          <Form className="" onSubmit={handleSubmit}>
            <FormRow label="property details">
              <StyledInput
                id="details"
                onChange={(e) => setPropertyDetails(e.target.value)}
                value={propertyDetails}
              />
            </FormRow>
            <FormRow label="Address">
              <StyledInput
                placeHolder="The location of property"
                id="location"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </FormRow>
            <FormRow label="Title">
              <StyledInput
                placeHolder=" The name of the property owner"
                id="state"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormRow>
            <FormRow label="Total-Package">
              <StyledInput
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeHolder="pricing"
                id="price"
              />
            </FormRow>
            <FormRow label="Phone">
              <StyledInput type="mobile" placeHolder="c" id="phone" />
            </FormRow>
            {!response.isPending && (
              <FormRow>
                <Button type="primary">Complete</Button>
              </FormRow>
            )}
            {response.isPending && (
              <FormRow>
                <Button type="primary">Loading...</Button>
              </FormRow>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ProductSaleForm;

function Form({ children, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="min-w-full flex gap-6 items-center justify-center bg-slate-50 flex-col"
    >
      {children}
    </form>
  );
}
