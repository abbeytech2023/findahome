import { useForm } from "react-hook-form";
// import Form from "../components";
import FormRow from "../components/FormRow";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserCollections } from "../hooks/useUserCollections";
import { useLocation } from "react-router-dom";
import { Heading } from "./HeadingText";

// Email regex: /\S+@\S+\.\S+/

function Profile() {
  const { user } = useAuthContext();
  const { documents, error } = useUserCollections(
    "Users"
    // ["uid", "==", user && user.uid],
    // ["createdAt", "desc"]
  );

  const location = useLocation();

  console.log(location.pathname);

  const { register, formState, handleSubmit } = useForm();

  const { errors } = formState;

  function onSubmit({ email, fullName, password, passwordConfirm }) {
    console.log(email, fullName, password, passwordConfirm);
    // signup(
    //   { fullName, email, password },
    //   {
    //     onSettled: () => reset,
    //   }
    // );
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col mt-44 gap-8">
        <Heading as="h2" className="text-center px-2">
          Edit and save your profile
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <FormRow label="Fullname" error={errors?.fullName?.message}>
            <StyledInput
              defaultValue={user && user.displayName}
              name="fullName"
              type="text"
              id="fullName"
              disabled
              // disabled={isLoading}
              {...register("fullName", { required: "This field is required" })}
            />
          </FormRow>

          <FormRow label="Email address" error={errors?.email?.message}>
            <StyledInput
              defaultValue={user && user.email}
              type="email"
              id="email"
              name="email"
              disabled
              // disabled={isLoading}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>

          <FormRow
            label="Password (min 8 characters)"
            error={errors?.password?.message}
          >
            <StyledInput
              type="password"
              id="password"
              disabled
              // disabled={isLoading}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "password needs a minimum of 8 characters",
                },
              })}
            />
          </FormRow>
          <FormRow label="user ID" error={errors?.password?.message}>
            <StyledInput
              defaultValue={user && user.uid}
              type="text"
              id="ID"
              disabled
              // disabled={isLoading}
              // {...register("password", {
              //   required: "This field is required",
              //   minLength: {
              //     value: 8,
              //     message: "password needs a minimum of 8 characters",
              //   },
              // })}
            />
          </FormRow>

          <FormRow className="text-gray-700 mt-1rem" disabled>
            <Button type="small">Save</Button>
          </FormRow>
        </form>
      </div>
      {/* <StyledSubheading>Your Houses For Sale</StyledSubheading> */}
    </>
  );
}

export default Profile;
