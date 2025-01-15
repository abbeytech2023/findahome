import { useState } from "react";
import Button from "./Button";
import FormRow from "./FormRow";
import Input from "./Input";
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import StyledInput from "./StyledInput";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  // const [fullname, setFullname] = useState("");

  const { register, getValues, reset, formState, handleSubmit } = useForm();

  const { errors } = formState;

  const onSubmit = ({ email, password }) => {
    console.log(email);

    login(email, password);
    console.log(email, password);
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="">
        <div>
          <Form onSubmit={onSubmit} handleSubmit={handleSubmit} className="">
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
    </div>
  );
}

export default LoginForm;

function Form({ children, handleSubmit, onSubmit }) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-full flex gap-6 justify-center items-center  bg-slate-50 flex-col"
    >
      {children}
    </form>
  );
}
