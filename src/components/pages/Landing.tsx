import React, { useContext, useEffect, useState } from "react";
import { Link, useCurrentRoute } from "react-navi";
import ServicesApi from "../../api/services";
import { GlobalContext } from "../../context/GlobalContext";
import {

  Table,

} from "antd";
import "antd/dist/antd.css";
export default function Landing() {
  const { searchApp, loader, table, searchedData, pageSizeData, ColumnData } = useContext(GlobalContext);
  const [loading, setLoading]=loader;
  const [tableData, setTabledata] =table;
  const [filteredData,setFilteredData] = searchedData;
  const [pageSize, setPagesize] = pageSizeData;
  const [col, setCol] =ColumnData
  
  //Lets change Page
  const onPaginationChange = (page: any, newPageSize: any) => {
    setPagesize(newPageSize);
  };

  const searchTable = (event:any) =>{
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = tableData.filter((data:any) => {
    return data.company_name.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }

  // useEffect as ComponentWillMount
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await ServicesApi.getData("/MOCK_DATA.json");
      return data;
    };

    fetchData()
      .catch((e) => {})
      .then((data) => {
        if (data != undefined) {
          //do something
          setTabledata(data);
          setFilteredData(data);
          setLoading(false)
        } else {
          //do something else
        }
      });
  }, []);
  return (
    <div className="dataTable">
      <input type="text" onChange={(event) =>searchTable(event)} placeholder="Search Company "/>
     
      <Table
      rowKey={(record:any) => record.id}
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
