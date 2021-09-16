import React, { useContext, useEffect } from "react";

import ServicesApi from "../../api/services";
import { GlobalContext } from "../../context/GlobalContext";
import { Table } from "antd";
import "antd/dist/antd.css";
export default function Landing() {
  const { loader, table, searchedData, pageSizeData, ColumnData } =
    useContext(GlobalContext);
  const [loading, setLoading] = loader;
  const [tableData, setTabledata] = table;
  const [filteredData, setFilteredData] = searchedData;
  const [pageSize, setPagesize] = pageSizeData;
  const [col] = ColumnData;

  //Lets change Page
  const onPaginationChange = (page: any, newPageSize: any) => {
    setPagesize(newPageSize);
  };

  const searchTable = (event: any) => {
    let value = event.target.value.toLowerCase();
    let result = [];

    result = tableData.filter((data: any) => {
      return data.company_name.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  // useEffect as ComponentWillMount
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await ServicesApi.getData("/MOCK_DATA.json");
      return data;
    };

    fetchData()
      .catch((e) => {})
      .then((data) => {
        if (data !== undefined) {
          //do something
          setTabledata(data);
          setFilteredData(data);
          setLoading(false);
        } else {
          //do something else
        }
      });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="dataTable">
      <div className="companyDetails">Companies List</div>
      <input
        type="text"
        onChange={(event) => searchTable(event)}
        placeholder="Search Company "
        className="search"
      />

      <Table
        rowKey={(record: any) => record.id}
        columns={col}
        dataSource={filteredData}
        loading={loading}
        pagination={{
          pageSize: pageSize,
          showSizeChanger: true,
          showLessItems: true,
          pageSizeOptions: ["5", "10", "25", "50", "100"],
          onChange: onPaginationChange,
        }}
      />
    </div>
  );
}
