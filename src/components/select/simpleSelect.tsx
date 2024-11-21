import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Select, {
  SingleValue,
  components,
  StylesConfig,
  MultiValue,
} from "react-select";
interface Option {
  label: string;
  value: string;
}

interface SimpleSelectProps {
  selectedOption: SingleValue<Option>; // Or Option | null if multiple is used
  options: Option[];
  defaultValue?: Option[];
  placeholder?: String;
  isMulti?: boolean;
  setSelectedOption: (
    newValue: SingleValue<Option> | MultiValue<Option>
    // actionMeta?: ActionMeta<Option>
  ) => void;
}
const customStyles: StylesConfig<Option> = {
  control: (provided) => ({
    ...provided,
    borderColor: "transparent",

    boxShadow: "none",
    // minWidth: "200px",
    "&:hover": { borderColor: "transparent" },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "lightblue" : "white",
    color: "black",
    // "&:hover": { backgroundColor: "lightgray" },
    minWidth: "100px", // Ensure options have a minimum width
    textAlign: "center",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
    boxShadow: "0px 0px 100px -50px rgba(255,255,255,0.9)",
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
    textOverflow: "ellipsis", // Enables text truncation
    whiteSpace: "nowrap", // Prevents wrapping
    maxWidth: "100px", // Adjust as needed
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
    // width: "100%",
    // maxWidth: "300px",
    // overflow: "hidden",
    textOverflow: "ellipsis", // Enables text truncation
    whiteSpace: "nowrap", // Prevents wrapping
    width: "150px", // Adjust as needed
  }),
};
// Custom Component: Custom SingleValue
const CustomSingleValue = (props: any) => (
  <components.SingleValue {...props} className="absolute">
    <span
      className="dark:text-white text-black"
      style={{
        // color: "black",
        fontWeight: "bold",
      }}
    >
      {props.data.label}
    </span>
  </components.SingleValue>
);

// Custom Component: Custom Option
const CustomOption = (props: any) => (
  <components.Option
    {...props}
    className=" dark:text-white hover:bg-gray-100  dark:hover:bg-[#151b25] dark:bg-[#1d2533]"
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginRight: 10 }}></span>
      {props.data.label}
    </div>
  </components.Option>
);
interface CustomInputProps {
  [key: string]: any; // Allowing other props to be passed in (you can make this more specific if needed)
}
const CustomInput = (props: CustomInputProps) => {
  return (
    <div
      style={{
        visibility: "visible",
        flex: "1 1 auto",
        display: "inline-grid",
        gridArea: "1 / 1 / 2 / 3",
        // gridTemplateColumns: "0 min-content",
        margin: "2px",
        paddingBottom: "2px",
        paddingTop: "2px",
        color: "hsl(0, 0%, 20%)",
        boxSizing: "border-box",
      }}
      className="flex items-center  rounded-lg   bg-transparent py-1"
    >
      {/* <FiSearch className="mr-2 text-gray-500" /> */}
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
  children: React.ReactNode; // Defining the 'children' prop type
  [key: string]: any; // Allowing other props to be passed in (you can make this more specific if needed)
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
  children: React.ReactNode; // Defining the 'children' prop type
  [key: string]: any; // Allowing other props to be passed in (you can make this more specific if needed)
}

const CustomControl = (props: CustomControlProps) => {
  const { children, className, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      className={` dark:bg-[#1d2533]  dark:border-[#1d2533] flex items-center border-2 border-none rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...innerProps} // Spread other innerProps
    >
      {/* <FaFilter className="mr-2" /> */}
      {children} {/* Render the selected value */}
    </div>
  );
};
const CustomMenu = (props: any) => {
  return (
    <components.Menu
      {...props}
      className="bg-gray-200 p-2 rounded-md   shadow-[0_35px_60px_-15px_rgba(255,255,255,1)] dark:bg-[#1d2533] "
    >
      {/* <div className="text-center text-lg text-blue-600">Custom Menu</div> */}
      {props.children}
    </components.Menu>
  );
};
function SimpleSelect({
  options,
  isMulti = false,
  setSelectedOption,
  defaultValue,
  placeholder = "Select an option",
}: SimpleSelectProps) {
  return (
    <Select
      className="border-none"
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
  );
}

export default SimpleSelect;
