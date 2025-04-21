import { useState } from "react";
import Button from "./Button";
import FormRow from "./FormRow";
import Input from "./Input";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import Form from "./Form";
import StyledInput from "./StyledInput";
import toast from "react-hot-toast";

function LoginForm() {
  const { login, error, isPending } = useLogin();
  // const [fullname, setFullname] = useState("");

  const { register, getValues, reset, formState, handleSubmit } = useForm();

  const { errors } = formState;

  const onSubmit = ({ email, password }) => {
    login(email, password);
  };

  return (
    <div>
      <div>
        <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
          {/* <FormRow label="Email">
              <Input
                type="email"
                placeHolder="Enter your Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormRow> */}

          <FormRow label="Email" error={errors?.email?.message}>
            <StyledInput
              type="email"
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
              minLength="8"
              type="password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "password needs a minimum of 8 characters",
                },
              })}
            />
          </FormRow>

          {/* <FormRow label="password">
              <Input
                type="password"
                placeHolder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormRow> */}

          <FormRow>
            {!isPending && <Button type="primary">Log in</Button>}
            {isPending && <Button type="primary">Loading...</Button>}
            {error && <p className="text-red-700 text-2xl">{error}</p>}
          </FormRow>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
