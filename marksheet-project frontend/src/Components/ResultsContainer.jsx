import React from "react";
import TableContainer from "./TableContainer";

const ResultsContainer = () => {
  const data = [
    {
      regNo: "SE20121345",
      rollNo: 2145,
      name: "Ashish Ranjan",
      class: "12th",
      dob: "16/08/2001",
    },
    {
      regNo: "SE20121348",
      rollNo: 2140,
      name: "Shreya Singh",
      class: "10th",
      dob: "26/02/2004",
    },
    {
      regNo: "SE20121340",
      rollNo: 2147,
      name: "Bhumi Singh",
      class: "10th",
      dob: "05/11/2007",
    },
  ];
  const cols = [
    {
      accessorKey: "regNo",
      header: "Reg. No.",
      size: 200,
    },
    {
      accessorKey: "rollNo",
      header: "Roll No.",
      size: 150,
    },
    {
      accessorKey: "name",
      header: "Name",
      size: 200,
    },
    {
      accessorKey: "dob",
      header: "DOB",
      size: 150,
    },
  ];
  return (
    <div className="p-5 flex flex-col gap-5 max-h-svh">
      <h1 className="text-lg font-semibold text-gray-600">Results</h1>
      <div className="pt-3 ">
        <TableContainer data={data} cols={cols} isResult={true} />
      </div>
    </div>
  );
};

export default ResultsContainer;
