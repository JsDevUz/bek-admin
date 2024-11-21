import React from "react";
interface LabelProps {
  label?: string;
}
function Label({ label }: LabelProps) {
  return (
    <span className="text-[16px] font-bold text-[#6f6f6f] dark:text-white">
      {label}
    </span>
  );
}

export default Label;
