import Button from "./Button";
import FormRow from "./FormRow";

import { useSignup } from "../hooks/useSignup";
import { useForm } from "react-hook-form";
import Form from "./Form";
import StyledInput from "./StyledInput";

function SignUpForm() {
  const { error, isPending, signup } = useSignup();
  const { register, formState, handleSubmit, reset, getValues, watch } =
    useForm();

  const { errors } = formState;

  const onSubmit = ({ email, password, fullName, phoneNumber }) => {
    signup(email, password, fullName, phoneNumber);
  };

  return (
    <div>
      <div>
        <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
          <FormRow label="Full-Name" error={errors?.fullName?.message}>
            <StyledInput
              type="text"
              placeHolder="Enter your full Name"
              id="fullname"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label="Email" error={errors?.email?.message}>
            <StyledInput
              type="text"
              placeHolder="Enter your Email"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>
          <FormRow label="password" error={errors?.password?.message}>
            <StyledInput
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "password needs a minimum of 8 characters",
                },
              })}
            />
          </FormRow>
          <FormRow
            label="Repeat password"
            error={errors?.passwordConfirm?.message}
          >
            <StyledInput
              type="password"
              id="passwordConfirm"
              name="password"
              {...register("passwordConfirm", {
                validate: (value) => {
                  const password = getValues().password;
                  if (value != password) return "password needs to match";
                },
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
            {!isPending && <Button type="primary">Create a new user</Button>}
            {isPending && (
              <Button type="primary" disabled>
                loading...
              </Button>
            )}
          </FormRow>
          {error && <p className="text-[1.8rem]  text-red-700">{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export default SignUpForm;
