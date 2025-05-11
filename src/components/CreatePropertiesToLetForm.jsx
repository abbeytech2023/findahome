import { addPropertiesToLet, useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useForm } from "react-hook-form";
import Button from "./Button";
import FormRow from "./FormRow";
import StyledInput from "./StyledInput";
import styled from "styled-components";
import { Heading } from "./HeadingText";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useFetchUsers } from "../hooks/useFetchProperties";

export default function PropertyToLetForm({ uid }) {
  const { userDoc } = useFetchUsers();

  const QueryClient = useQueryClient();
  const { user } = useAuthContext();

  const { register, getValues, reset, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const { mutate, isPending } = useMutation({
    mutationFn: addPropertiesToLet,
    onSuccess: () => {
      toast.success("property added successfully");
      QueryClient.invalidateQueries({ queryKey: ["ToLets"] });
      reset();
    },
    onError: () => {
      toast.error("property could not be added");
    },
  });

  const document = userDoc && userDoc.filter((doc) => doc.id === uid);

  const phoneNumber = document && document[0]?.mobilePhone;

  // const mobilePhone = document?.mobilePhone;

  // console.log(mobilePhone);

  const agentName = user?.displayName;

  const onSubmit = ({
    propertyDescription,
    propertyLocation,
    localGovernment,
    State,
  }) => {
    mutate({
      uid,
      propertyDescription,
      propertyLocation,
      localGovernment,
      agentName,
      State,
      phoneNumber,
    });
    console.log(
      uid,
      propertyDescription,
      propertyLocation,
      localGovernment,
      agentName,
      State,
      phoneNumber
    );
  };

  return (
    <div className=" ">
      <div className=" flex  flex-col gap-8  ">
        {/* <Heading as="h2">Properties To Let Form</Heading> */}

        <div className="flex justify-center items-center">
          <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
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
              label="Property-Location"
              error={errors?.propertyLocation?.message}
            >
              <StyledInput
                type="text"
                id="propertyLocation"
                {...register("propertyLocation", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow label="State" error={errors?.State?.message}>
              <StyledInput
                type="text"
                id="state"
                {...register("State", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow
              label="Local-Government"
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

            <FormRow>
              {!isPending && (
                <Button type="primary" className="mt-12">
                  Complete
                </Button>
              )}
              {isPending && (
                <Button type="primary" disabled>
                  loading...
                </Button>
              )}
            </FormRow>
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
      className="flex gap-4 items-center justify-center flex-col mb-[12rem]"
    >
      {children}
    </form>
  );
}
