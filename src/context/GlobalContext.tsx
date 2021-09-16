import React, { createContext, useState } from "react";
import { Link } from "react-navi";

import { Search, TableData, Column } from "../types/GlobalTypes";
export const GlobalContext = createContext<any | null>(null);

export const GlobalProvider = (props: any) => {
  const [search, setsearch] = useState<Search>();
  const [loading, setLoading] = useState<boolean>(true);
  const [tableData, setTabledata] = useState<TableData>();
  const [filteredData, setFilteredData] = useState(tableData);
  const [pageSize, setPagesize] = useState<number>(5);
  const [col, setCol] = useState([
    {
      title: "Company Name",
      dataIndex: "company_name",
      render: (text: string, record: any) => (
        <Link href={`/view/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Currency Code",
      dataIndex: "currency_code",
    },
    {
      title: "Currency",
      dataIndex: "currency",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Sales Total",
      dataIndex: "sales_total",
    },
    {
      title: "City",
      dataIndex: "city",
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        searchApp: [search, setsearch],
        loader: [loading, setLoading],
        table: [tableData, setTabledata],
        searchedData: [filteredData, setFilteredData],
        pageSizeData: [pageSize, setPagesize],
        ColumnData: [col, setCol],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
