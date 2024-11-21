import Label from "../label";
import { useId } from "react";
function SimpleInput({
  placeholder,
  id = useId(),
  defaultValue,
  value,
  label,
  onChange,
}: any) {
  return (
    <div className="flex flex-col w-[100%]">
      <Label label={label} />
      <input
        className="rounded-[10px] outline-0 min-w-[300px] min-h-[60px] mt-[10px] bg-[#fff] border-none dark:text-white text-[#6f6f6f] px-[20px] py-[10px] border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-600 dark:bg-[#1d2533]"
        value={value}
        defaultValue={defaultValue}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SimpleInput;
