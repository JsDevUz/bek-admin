import { FaAngleDown, FaRotateLeft } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import SimpleSelect from "../../../../components/select/simpleSelect";
import Select from "react-select/base";
import { MultiValue, SingleValue } from "react-select";
interface Option {
  label: string;
  value: string;
}

interface FilterBoxProps {
  options: Option[];
  selectedOption: SingleValue<Option> | MultiValue<Option> | null; // Or SingleValue<Option> if using react-select types
  setSelectedOption: (
    newValue: SingleValue<Option> | MultiValue<Option> | null
  ) => void;
}
const FilterBox: React.FC<FilterBoxProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="flex dark:bg-[#1d2533] bg-white w-fit rounded-[10px] mb-[10px]">
      <div className="px-[20px] py-[15px] flex items-center">
        <FiFilter className="text-black dark:text-white" size={30} />
      </div>
      <span className="bg-gray-300 dark:bg-gray-100 w-[1px] opacity-30 "></span>
      <div className="px-[10px] py-[15px] flex items-center">
        <SimpleSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          placeholder={"Filter By"}
        />
      </div>
      <span className="bg-gray-300 dark:bg-gray-100 w-[1px] opacity-30 "></span>

      <div className="px-[10px] py-[15px] flex items-center">
        <SimpleSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          placeholder={"Date"}
        />
      </div>
      <span className="bg-gray-300 dark:bg-gray-100 w-[1px] opacity-30 "></span>

      <div className="px-[10px] py-[15px] flex items-center">
        <SimpleSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          placeholder={"Order type"}
        />
      </div>
      <span className="bg-gray-300 dark:bg-gray-100 w-[1px] opacity-30 "></span>

      <div className="px-[10px] py-[15px] flex items-center">
        <SimpleSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          placeholder={"Order status"}
        />
      </div>
      <span className="bg-gray-300 dark:bg-gray-100 w-[1px] opacity-30 "></span>

      <div className="px-[10px] py-[15px] flex items-center">
        <FaRotateLeft size={12} className="mr-[10px]" />
        <span className="mr-[10px]">Reset Filter</span>
      </div>
    </div>
  );
};

export default FilterBox;
