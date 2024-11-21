import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "@salt-ds/ag-grid-theme/salt-ag-theme.css";
import "./grid.css";

const CustomCellRenderer = (props: any) => {
  return (
    <span style={{ color: "green", fontWeight: "bold" }}>{props.value}</span>
  );
};

function FullWidthAgGrid({ columns, data }: any) {
  return (
    <AgGridReact
      columnDefs={columns}
      defaultColDef={{
        flex: 1,
        minWidth: 100,
      }}
      rowData={data}
      components={{
        customCellRenderer: CustomCellRenderer,
      }}
      domLayout="autoHeight"
    />
  );
}

export default FullWidthAgGrid;
