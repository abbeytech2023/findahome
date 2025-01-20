export default function Form({ children, handleSubmit, onSubmit }) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex gap-4 text-lg   bg-slate-50 flex-col"
    >
      {children}
    </form>
  );
}
