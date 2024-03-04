import React, { useEffect, useState } from "react";
import TableContainer from "./TableContainer";
import axios from "axios";
import ErrorToast from "../utility/ErrorToast";

const HomeContainer = () => {
  const [data, setData] = useState(null);
  const cols = [
    {
      accessorKey: "name", //normal accessorKey
      header: "Name",
      size: 200,
    },
    {
      accessorKey: "fatherName",
      header: "Father Name",
      size: 150,
    },
    {
      accessorKey: "motherName",
      header: "Mother Name",
      size: 150,
    },
    {
      accessorKey: "dob",
      header: "DOB",
      size: 150,
    },
  ];
  useEffect(() => {
    getStudentsList();
  }, []);
  const getStudentsList = async () => {
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/student`
      );
      setData(resp.data.data);
    } catch (err) {
      ErrorToast("Server Error. Try again later!");
    }
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Students</h1>
      {data ? (
        <div className="pt-3">
          <TableContainer
            data={data}
            cols={cols}
            isResult={false}
            field={"student"}
            setData={setData}
          />
        </div>
      ) : (
        <div className="self-center py-10">
          <span className="loading loading-spinner loading-lg bg-blue"></span>
        </div>
      )}
    </div>
  );
};

export default HomeContainer;
