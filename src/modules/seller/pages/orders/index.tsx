import { useState } from "react";
import FilterBox from "./Filter";
import { MultiValue, SingleValue } from "react-select";
import FullWidthAgGrid from "../../../../components/table/AgGridFull";
import { ColDef } from "ag-grid-community";
import tableHeaderSelector from "./tableHeaderSelector";

function OrdersPage() {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ];

  const columnDefs: ColDef<{ make: string; model: string; price: number }>[] = [
    //   { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Make", field: "make" },
    { headerName: "Price", field: "price" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
    { headerName: "Model", field: "model" },
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
      <span className="font-bold text-[30px] mb-[30px]">Orders List</span>
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

export default OrdersPage;
