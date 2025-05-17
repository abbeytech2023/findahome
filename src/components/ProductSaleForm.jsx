import { addPropertiesForSale } from "../hooks/useFirestore";
import Button from "./Button";
import FormRow from "./FormRow";
import StyledInput from "./StyledInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useFetchUsers } from "../hooks/useFetchProperties";
import { StyledSpinner } from "./Spinner";

function ProductSaleForm({ uid }) {
  const { reset, register, handleSubmit, formState } = useForm();
  const { userDoc } = useFetchUsers();

  const { errors } = formState;

  const document = userDoc && userDoc.filter((doc) => doc.id === uid);

  const phoneNumber = document && document[0]?.mobilePhone;

  const QueryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addPropertiesForSale,
    onSuccess: () => {
      toast.success("Property added successfully");
      QueryClient.invalidateQueries({ queryKey: ["Outlets"] });
      reset();
    },
    onError: () => {
      toast.error("property could not be added");
    },
  });

  const onSubmit = ({ address, propertyDetails, title, price }) => {
    mutate({ uid, address, propertyDetails, title, price, phoneNumber });
  };

  return (
    <div className=" ">
      <div className="h-[70rem] flex  flex-col gap-8">
        {/* <Heading as="h2" className="text-center">
          Properties For Sale Form
        </Heading> */}

        <div className="h-[60rem]  flex  flex-col gap-8">
          {!document ? (
            <StyledSpinner />
          ) : (
            <Form
              // className="flex items-center justify-center flex-col"
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
            >
              <FormRow
                label="Property details"
                error={errors?.propertyDetails?.message}
              >
                <textarea
                  minLength="10"
                  placeholder="About the property"
                  rows="4"
                  cols="50"
                  className="border-[1px] border-[#666] px-2"
                  id="propertyDetails"
                  {...register("propertyDetails", {
                    required: "This field is required",
                  })}
                ></textarea>
              </FormRow>
              <FormRow label="Address" error={errors?.address?.message}>
                <StyledInput
                  minLength="15"
                  className="h-[50px]"
                  placeHolder="The location of property"
                  id="address"
                  {...register("address", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow label="Title" error={errors?.state?.message}>
                <StyledInput
                  minLength="7"
                  placeHolder=" The name of the property owner"
                  id="title"
                  {...register("title", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow label="Total-Package" error={errors?.price?.message}>
                <StyledInput
                  type="number"
                  placeHolder="pricing"
                  id="price"
                  {...register("price", {
                    required: "This field is required",
                  })}
                />
              </FormRow>

              <Button type="primary">
                {isPending ? <p>Loading...</p> : <p>Completed</p>}
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSaleForm;

function Form({ children, handleSubmit, onSubmit }) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-4 items-center justify-center flex-col"
    >
      {children}
    </form>
  );
}
