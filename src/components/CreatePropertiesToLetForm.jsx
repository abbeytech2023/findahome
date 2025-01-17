import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import Button from "./Button";
import FormRow from "./FormRow";
import StyledInput from "./StyledInput";
import { useState } from "react";
import styled from "styled-components";
import { Heading, StyledSubheading } from "./HeadingText";

const OpenCloseForm = styled.button`
  border: 1px solid black;

  padding: 0.6rem 1rem;
`;

export default function PropertyLetForm() {
  const { addDocument, response } = useFirestore("ToLets");
  const { user } = useAuthContext();

  const { register, getValues, reset, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const agentName = user?.displayName;

  const onSubmit = ({
    propertyDescription,
    propertyLocation,
    localGovernment,
    phoneNumber,
  }) => {
    addDocument({
      propertyDescription,
      propertyLocation,
      localGovernment,
      phoneNumber,
      agentName,
    });
  };

  return (
    <div className=" ">
      <div className="flex items-center justify-center flex-col gap-8 mt-20 ">
        <Heading as="h2">Properties To Let Form</Heading>

        <div className="flex justify-center items-center">
          <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
            {/* <FormRow label="Full-Name" error={errors?.fullName?.message}>
              <StyledInput
                type="text"
                placeHolder="Enter your full Name"
                id="fullname"
                {...register("agentName", {
                  required: "This field is required",
                })}
              />
            </FormRow> */}
            <FormRow
              label="Property Description"
              error={errors?.propertyDescription?.message}
            >
              <StyledInput
                type="text"
                placeHolder="describe the property"
                id="propertyDescription"
                {...register("propertyDescription", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow
              label="property-location"
              error={errors?.propertyLocation?.message}
            >
              <StyledInput
                type="text"
                id="password"
                {...register("propertyLocation", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow
              label="Local-govt"
              error={errors?.localGovernment?.message}
            >
              <StyledInput
                type="text"
                id="localGovernment"
                {...register("localGovernment", {
                  required: "This field is required",
                })}
              />
            </FormRow>

            <FormRow label="Phone">
              <StyledInput
                placeHolder="Enter your phone Number"
                id="phone"
                {...register("phoneNumber", {
                  required: "this field is required",
                })}
              />
            </FormRow>
            <FormRow>
              {<Button type="primary">Complete</Button>}
              {/* {
                <Button type="primary" disabled>
                  loading...
                </Button>
              } */}
            </FormRow>
            {/* {error && <p className="text-[1.8rem]  text-red-700">{error}</p>} */}
          </Form>
        </div>
      </div>
    </div>
  );
}

function Form({ children, handleSubmit, onSubmit }) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="   flex gap-6 items-center justify-center flex-col"
    >
      {children}
    </form>
  );
}
