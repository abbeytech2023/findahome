// import Input from "@/app/_components/Input";

function FormRow({ children, label, error }) {
  return (
    <div className="flex flex-col gap-4 mb-4">
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormRow;

function Label({ children }) {
  return <div className=" xl:text-2xl text-1xl">{children}</div>;
}

function Error({ children }) {
  return <span className="font-semibold text-red-700">{children}</span>;
}
