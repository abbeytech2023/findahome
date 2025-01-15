import { useForm } from "react-hook-form";
// import Form from "../components";
import FormRow from "../components/FormRow";
import Button from "../components/Button";
import StyledInput from "../components/StyledInput";
import { useAuthContext } from "../hooks/useAuthContext";
import ProductCart from "../components/ProductCart";
import { useUserCollection } from "../hooks/useUserCollection";
import { StyledSubheading } from "../components/HeadingText";
import { useLocation } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/
function Profile() {
  const { user } = useAuthContext();
  const { documents, error } = useUserCollection(
    "Outlets",
    ["uid", "==", user && user.uid],
    ["createdAt", "desc"]
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
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-32">
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

          <FormRow className="text-gray-700" disabled>
            <Button type="small">Save</Button>
          </FormRow>
        </form>
      </div>
      <StyledSubheading>Your Houses For Sale</StyledSubheading>
      <sectiion>
        <ProductCart
          uid={user && user.uid}
          documents={documents}
          error={error}
        />
      </sectiion>
    </>
  );
}

export default Profile;
