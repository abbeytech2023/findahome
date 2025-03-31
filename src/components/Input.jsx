function Input({ placeHolder, type, onChange, value, disabled, ref }) {
  return (
    <input
      className={` w-[28rem] pl-5 h-12 text-2xl flex items-center justify-center border-2 border-black border-solid rounded-lg placeholder:text-[#8e979d] placeholder:text-2xl`}
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
