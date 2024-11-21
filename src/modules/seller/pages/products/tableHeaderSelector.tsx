import { memo } from "react";
import thousandDivider from "../../../../../utils/thousandDivider";
const SimpleText = ({
  data,
  rowIndex,
  type,
  withDevider,
  endText,
  ...d
}: any) => {
  return (
    <span
      style={{
        whiteSpace: "pre-line",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
      id={`product-${type}-${rowIndex}`}
    >
      {data?.[type]}
      {/* {!withDevider || (
        <div
          style={{
            fontSize: "16px",
            padding: 0,
            marginLeft: "10px",
            fontWeight: "bold",
            backgroundColor: "#3CA98F",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            alignItems: "center",
            color: "#fff",
            justifyContent: "center",
            display: "flex",
          }}
        >{`${data?.shopMargin}%`}</div>
      )} */}
    </span>
  );
};

const SimplePrice = ({
  data,
  rowIndex,
  type,
  withDevider,
  endText,
  ...d
}: any) => {
  return (
    <span
      style={{
        whiteSpace: "pre-line",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
      id={`product-${type}-${rowIndex}`}
    >
      {thousandDivider(data?.[type])}
      {/* {!withDevider || (
        <div
          style={{
            fontSize: "16px",
            padding: 0,
            marginLeft: "10px",
            fontWeight: "bold",
            backgroundColor: "#3CA98F",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            alignItems: "center",
            color: "#fff",
            justifyContent: "center",
            display: "flex",
          }}
        >{`${data?.shopMargin}%`}</div>
      )} */}
    </span>
  );
};

const ImageBox = ({
  data,
  rowIndex,
  type,
  withDevider,
  endText,
  ...d
}: any) => {
  return (
    <span
      style={{
        whiteSpace: "pre-line",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
      id={`product-${type}-${rowIndex}`}
    >
      <img src={data?.[type]} />
      {/* {data?.[type]} */}
      {/* {!withDevider || (
        <div
          style={{
            fontSize: "16px",
            padding: 0,
            marginLeft: "10px",
            fontWeight: "bold",
            backgroundColor: "#3CA98F",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            alignItems: "center",
            color: "#fff",
            justifyContent: "center",
            display: "flex",
          }}
        >{`${data?.shopMargin}%`}</div>
      )} */}
    </span>
  );
};

export default function tableHeaderSelector({ orderColumns }: any) {
  const columns = orderColumns?.map((el: any) => {
    if (el.field === "model") {
      return {
        ...el,
        headerName: el.headerName,
        colId: el.field,
        cellRenderer: memo((p) => (
          <SimpleText {...p} type="model" endText="сум" />
        )),
      };
    }
    if (el.field === "image") {
      return {
        ...el,
        headerName: el.headerName,
        colId: el.field,
        cellRenderer: memo((p) => (
          <ImageBox {...p} type="image" endText="сум" />
        )),
      };
    }
    if (el.field === "id") {
      return {
        ...el,
        headerName: el.headerName,
        colId: el.field,
        cellRenderer: memo((p) => (
          <SimpleText {...p} type={el.field} endText="сум" />
        )),
      };
    }
    if (el.field === "price") {
      return {
        ...el,
        headerName: el.headerName,
        colId: el.field,
        cellRenderer: memo((p) => (
          <SimplePrice {...p} type={el.field} endText="сум" />
        )),
      };
    }
    if (el.field === "name") {
      return {
        ...el,
        headerName: el.headerName,
        colId: el.field,
        cellRenderer: memo((p) => (
          <SimpleText {...p} type={el.field} endText="сум" />
        )),
      };
    }
  });

  return columns;
}
