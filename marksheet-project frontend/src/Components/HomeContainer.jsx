import React from "react";
import TableContainer from "./TableContainer";

const HomeContainer = () => {
  const data = [
    {
      name: "Ashish Ranjan",
      fatherName: "Birendra Singh",
      motherName: "Sima Singh",
      dob: "16/08/2001",
    },
    {
      name: "Ashish Ranjan",
      fatherName: "Birendra Singh",
      motherName: "Sima Singh",
      dob: "16/08/2001",
    },
    {
      name: "Ashish Ranjan",
      fatherName: "Birendra Singh",
      motherName: "Sima Singh",
      dob: "16/08/2001",
    },
    {
      name: "Ashish Ranjan",
      fatherName: "Birendra Singh",
      motherName: "Sima Singh",
      dob: "16/08/2002",
    },
  ];
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
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Students</h1>
      <div className="pt-3">
        <TableContainer data={data} cols={cols} isResult={false} />
      </div>
    </div>
  );
};

export default HomeContainer;
