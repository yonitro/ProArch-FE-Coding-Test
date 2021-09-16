import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-navi";

import { GlobalContext } from "../../context/GlobalContext";

export default function SingleView() {
  const { table } = useContext(GlobalContext);

  const [tableData] = table;

  const [id, setId] = useState(0);

  //Lets change Page

  // useEffect as ComponentWillMount
  useEffect(() => {
    const url = new URL(window.location.href);
    const _id = url.pathname.split("/view/");
    const matchedID: number = parseInt(_id[1]);
    setId(matchedID - 1);
  }, []);

  return (
    <div className="singleViewCard">
      <div className="singleViewTitle">Company Details</div>
      <div className="singleView">
        Company Name: <span>{tableData[id].company_name}</span>
      </div>
      <div className="singleView">
        Currency Code: <span>{tableData[id].currency_code}</span>
      </div>
      <div className="singleView">
        Currency: <span>{tableData[id].currency}</span>
      </div>
      <div className="singleView">
        Department: <span>{tableData[id].department}</span>
      </div>
      <div className="singleView">
        Sales Total: <span>{tableData[id].sales_total}</span>
      </div>
      <div className="singleView">
        City: <span>{tableData[id].city}</span>
      </div>
      <Link className="goback" href={`/`}>
        &lt;&lt; Go Back
      </Link>
    </div>
  );
}
