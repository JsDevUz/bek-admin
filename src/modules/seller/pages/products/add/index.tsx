import React, { useState } from "react";
import Draft from "../../../../../components/draft/draft";
import Previews from "../../../../../components/dropzone";
import SimpleInput from "../../../../../components/input";
import CustomSelect from "../../../../../components/select/customSelect";
import SimpleNumberInput from "../../../../../components/input/numberIndex";

function AddAndEditProductPage() {
  const options = [
    { value: "uz", label: "O'zbekcha" },
    { value: "ru", label: "Ruscha" },
  ];
  // ...
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<Option> | MultiValue<Option> | null
  >(null);
  return (
    <div className="flex flex-col items-start  justify-start max-w-[900px] m-auto pt-[50px]">
      <div className="my-[10px] flex justify-between w-[100%]">
        <SimpleInput label="Mahsulot nomi" placeholder="Mahsulot nomi" />
        <div className="w-[30px]"></div>
        <SimpleNumberInput
          label="Mahsulot narxi"
          placeholder="Mahsulot narxi"
        />
      </div>
      <div className="my-[10px]">
        <Draft label={"Mahsulot tasnifi"} />
      </div>

      {/* <div className="my-[10px]">
        <CustomSelect
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          label="Til"
        />
      </div> */}

      <Previews label={"Mahsulot rasimlari"} />
    </div>
  );
}

export default AddAndEditProductPage;
