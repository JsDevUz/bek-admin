import { useState } from "react";
import SimpleInput from "../../../../../components/input";
import Hr from "../../../../../components/hr";
import CustomSelect from "../../../../../components/select/customSelect";
import { MultiValue, SingleValue } from "react-select";
import Dialog from "../../../../../components/dialog";

function InterfacePage() {
  const [darkState, setDark] = useState<Boolean>(
    localStorage.getItem("dark") === "true" ? true : false
  );
  const [isOpen, setIsOpen] = useState(false);
  interface Option {
    label: string;
    value: string;
  }
  const darkModeHandler = (opt: Boolean) => {
    if (opt !== darkState) {
      setDark(opt);
      localStorage.setItem("dark", String(opt));
      document.body.classList.toggle("dark");
    }
  };
  const options = [
    { value: "uz", label: "O'zbekcha" },
    { value: "ru", label: "Ruscha" },
  ];
  // ...
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<Option> | MultiValue<Option> | null
  >(null);
  return (
    <div className="flex flex-col">
      <span className="font-bold text-[40px] px-[30px] pt-[10px]">
        Profile sozlamalari
      </span>
      <Hr />
      <div className="flex my-[30px]">
        <span className="font-bold text-[30px] px-[30px] min-w-[200px] pt-[10px]">
          Asosiy
        </span>
        <div className="mt-[20px]">
          <SimpleInput label="Ism" placeholder="ISM" />
        </div>
        <div className="mt-[20px] ml-[20px]">
          <SimpleInput label="Familya" placeholder="Familya" />
        </div>
      </div>
      <Hr />
      <div className="flex">
        <span className="font-bold text-[30px] px-[30px] min-w-[200px] pt-[10px]">
          Interface
        </span>
        <div className="flex flex-col">
          <div className="mt-[20px]">
            <span className="font-bold text-[20px]  pt-[10px]">Mavzu</span>
            <div className="flex mt-[20px]">
              <img
                onClick={() => darkModeHandler(false)}
                className="mr-[20px]"
                src="https://test-back-import.billz.ai/images/Light.svg"
              />
              <img
                onClick={() => darkModeHandler(true)}
                src="https://test-back-import.billz.ai/images/Dark.svg"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[20px]">
            <CustomSelect
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              options={options}
              label="Til"
            />
          </div>
        </div>
      </div>
      <Dialog
        title={"Are you sure"}
        description={
          "The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan luv."
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <button
        className="max-w-[100px] h-[50px] bg-red-500 text-white border-none m-auto mt-[50px]"
        onClick={() => setIsOpen(true)}
      >
        Log out
      </button>
    </div>
  );
}

export default InterfacePage;
