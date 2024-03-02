import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import EditModalContainer from "./EditModalContainer";
import ResultModalContainer from "./ResultModalContainer";

const TableContainer = ({ data, cols, isResult }) => {
  const columns = useMemo(() => cols, [cols]);
  const [formData, setFormData] = useState({
    imgSrc: "",
    name: "",
    dob: "",
    fatherName: "",
    motherName: "",
    year: "",
    course: "",
    stream: "",
    firstLanguage: "",
    secondLanguage: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  });
  const handleEditBtn = () => {
    document.getElementById("my_modal_4").showModal();
    if (isResult) {
      setFormData({
        regNo: "SE2023478",
        name: "Ashish Raj",
        fatherName: "Birendra Singh",
        rollNo: "2587",
        subject1Marks: 78,
        subject2Marks: 97,
        subject3Marks: 45,
        subject4Marks: 78,
        subject5Marks: 45,
        subject6Marks: 78,
        subject7Marks: 98,
      });
      return;
    }
    setFormData({
      imgSrc: "",
      name: "Ashish Ranjan",
      dob: "2001-08-16",
      fatherName: "Birendra Singh",
      motherName: "Sima Singh",
      year: "2019",
      course: "SR. Secondary Examination(12th Class)",
      stream: "Commerce",
      firstLanguage: "HINDI",
      secondLanguage: "ENGLISH",
      option1: "ACCOUNTANCY",
      option2: "ECONOMICS",
      option3: "MATHEMATICS",
      option4: "COMPUTER SCIENCE",
      option5: "BUSINESS MATHS",
    });
  };
  const handleDeleteBtn = () => {
    if (isResult) {
      console.log("Result Delete Button working .....");
      return;
    }
    console.log("Student List Delete Button working .....");
  };
  const handleViewBtn = () => {
    console.log("Result View Button working .....");
  };
  const table = useMaterialReactTable({
    columns,
    data,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    enableEditing: true,
    getRowId: (row) => row.id,
    muiTableContainerProps: { sx: { maxHeight: "400px", minHeight: "360px" } },
    enableStickyHeader: true,
    enableStickyFooter: true,
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        padding: "10px 15px",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        fontWeight: "bold",
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      },
    },
    renderRowActions: ({ row }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        {isResult && (
          <Tooltip title="View">
            <IconButton onClick={handleViewBtn}>
              <ViewIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Edit">
          <IconButton onClick={handleEditBtn}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={handleDeleteBtn}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });
  return (
    <>
      <MaterialReactTable table={table} />
      {isResult ? (
        <ResultModalContainer formData={formData} setFormData={setFormData} />
      ) : (
        <EditModalContainer formData={formData} setFormData={setFormData} />
      )}
    </>
  );
};
export default TableContainer;
