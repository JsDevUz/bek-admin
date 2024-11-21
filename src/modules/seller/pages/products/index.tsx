import { useState } from "react";
import FilterBox from "./Filter";
import { MultiValue, SingleValue } from "react-select";
import FullWidthAgGrid from "../../../../components/table/AgGridFull";
import { ColDef } from "ag-grid-community";
import tableHeaderSelector from "./tableHeaderSelector";

function ProductsPage() {
  const rowData = [
    {
      name: "Toyota",
      id: "123",
      image:
        "https://images.uzum.uz/croeme6vip07shn5o750/t_product_540_high.jpg",
      price: 35000,
    },
    { name: "Ford", model: "Mondeo", price: 32000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
    { name: "Porsche", model: "Boxster", price: 72000 },
  ];

  const columnDefs: ColDef<{
    name: string;
    id: string;
    image: string;
    model: string;
    price: number;
  }>[] = [
    //   { headerName: "name", field: "name" },
    { headerName: "Id", field: "id" },
    { headerName: "Image", field: "image" },
    { headerName: "name", field: "name" },
    { headerName: "Price", field: "price" },

    //   { headerName: "Price", field: "price" },
  ];
  interface Option {
    label: string;
    value: string;
  }

  const options = [
    { value: "chocolatefrrgrgrggrg", label: "Chocolatefrfrfrgrgrgrgrgr" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  // ...
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<Option> | MultiValue<Option> | null
  >(null);
  const tableColumns = tableHeaderSelector({
    orderColumns: columnDefs,
    // searchTerm: values?.search,
    // setIsDrawerOpen,
    // setIsOrderCreateNote,
    // setOrderIdForNote,
    // refetchNotes,
    // setOpenAllNotes,
    // setOpenConfirmDialog,
    // operatorsList: operatorsList?.data?.admins || [],
    // assigneOperator,
    // userData,
    // setIsShopWarning,
  });
  return (
    <div className="flex flex-col p-[30px]">
      <span className="font-bold text-[30px] mb-[30px]">Products List</span>
      <FilterBox
        selectedOption={selectedOption}
        setSelectedOption={(newValue) => setSelectedOption(newValue)}
        options={options}
      />

      <div
        className="ag-theme-quartz dark:ag-dark-theme"
        style={{ height: 500 }}
      >
        <FullWidthAgGrid columns={tableColumns} data={rowData} />
      </div>
    </div>
  );
}

export default ProductsPage;
