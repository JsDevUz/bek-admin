import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Select, {
  SingleValue,
  components,
  StylesConfig,
  MultiValue,
} from "react-select";
import Label from "../label";
interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  selectedOption: SingleValue<Option>;
  options: Option[];
  defaultValue?: Option[];
  label?: string;
  placeholder?: String;
  isMulti?: boolean;
  setSelectedOption: (
    newValue: SingleValue<Option> | MultiValue<Option>
  ) => void;
}
const customStyles: StylesConfig<Option> = {
  control: (provided) => ({
    ...provided,
    borderColor: "transparent",

    boxShadow: "none",
    "&:hover": { borderColor: "transparent" },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "rgb(245, 246, 250)" : "white",
    color: "black",
    minWidth: "100px",
    textAlign: "center",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
    borderRadius: "10px",
    boxShadow: "0px 0px 10px -50px rgba(255,255,255,0.9)",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "black",
    fontSize: "20px",
    backgroundColor: "red",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "100px",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "lightgray",
    borderRadius: "4px",
    color: "yellow",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "gray",
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: "red",
    cursor: "pointer",
    "&:hover": { backgroundColor: "darkred", color: "white" },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "green",
    "&:hover": { color: "darkblue" },
    className: "dark:text-red-600",
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "red",
    "&:hover": { color: "darkred" },
  }),
  input: (base) => ({
    ...base,
    color: "black",
  }),
  container: (base) => ({
    ...base,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "150px",
  }),
};
const CustomSingleValue = (props: any) => (
  <components.SingleValue {...props} className="absolute">
    <span
      className="dark:text-white text-black"
      style={{
        fontWeight: "bold",
      }}
    >
      {props.data.label}
    </span>
  </components.SingleValue>
);

const CustomOption = (props: any) => (
  <components.Option
    {...props}
    className="rounded-[10px] my-[5px] dark:text-white hover:bg-gray-100  dark:hover:bg-[#151b25] dark:bg-[#1d2533]"
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: 10 }}></span>
      {props.data.label}
    </div>
  </components.Option>
);
interface CustomInputProps {
  [key: string]: any;
}
const CustomInput = (props: CustomInputProps) => {
  return (
    <div
      style={{
        visibility: "visible",
        flex: "1 1 auto",
        display: "inline-grid",
        gridArea: "1 / 1 / 2 / 3",
        margin: "2px",
        paddingBottom: "2px",
        paddingTop: "2px",
        color: "hsl(0, 0%, 20%)",
        boxSizing: "border-box",
      }}
      className="flex items-center  rounded-lg   bg-transparent py-1"
    >
      <input
        style={{
          color: "inherit",
          background: "0px center",
          opacity: 1,
          width: "100%",
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: "0px",
          margin: "0px",
          outline: "0px",
          padding: "0px",
        }}
        {...props}
        className=" z-30 outline-none bg-transparent border-none "
      />
    </div>
  );
};
interface CustomPlaceholderProps {
  children: React.ReactNode;
  [key: string]: any;
}

const customPlaceholder = (props: CustomPlaceholderProps) => {
  return (
    <div
      {...props}
      style={{
        gridArea: "1 / 1 / 2 / 3",
        marginLeft: "2px",
        marginRight: "2px",
        boxSizing: "border-box",
      }}
      className="text-black dark:text-white "
    >
      {props.children}
    </div>
  );
};
interface CustomControlProps {
  children: React.ReactNode;
  [key: string]: any;
}

const CustomControl = (props: CustomControlProps) => {
  const { children, className, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      className={`min-w-[300px] min-h-[60px] dark:bg-[#1d2533]  dark:border-[#1d2533] bg-white flex items-center border-2 border-none rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...innerProps}
    >
      {children}
    </div>
  );
};
const CustomMenu = (props: any) => {
  return (
    <components.Menu
      {...props}
      className="rounded-xl min-w-[300px] bg-gray-200 p-2    shadow-[0_35px_60px_-15px_rgba(255,255,255,1)] dark:bg-[#1d2533] "
    >
      {props.children}
    </components.Menu>
  );
};
function CustomSelect({
  options,
  isMulti = false,
  setSelectedOption,
  defaultValue,
  placeholder = "Select an option",
  label,
}: CustomSelectProps) {
  return (
    <div className="flex flex-col">
      <Label label={label} />
      <Select
        className="border-none mt-[10px]"
        defaultValue={defaultValue}
        onChange={(newValue) => setSelectedOption(newValue)}
        options={options}
        isMulti={isMulti}
        styles={customStyles}
        components={{
          SingleValue: CustomSingleValue,
          Option: CustomOption,
          Control: CustomControl,
          Input: CustomInput,
          Menu: CustomMenu,
          Placeholder: customPlaceholder,
          DropdownIndicator: () => (
            <FaAngleDown className="dark:text-white text-black" />
          ),
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomSelect;
