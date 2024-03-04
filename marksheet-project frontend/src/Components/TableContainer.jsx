import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import ResultModalContainer from "./ResultModalContainer";
import ErrorToast from "../utility/ErrorToast";
import axios from "axios";
import SuccessToast from "../utility/SuccesToast";
import AdminModalContainer from "./AdminModalContainer";
import StudentModalContainer from "./StudentModalContainer";

const TableContainer = ({ data, cols, isResult, field, setData }) => {
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
  const [rowData, setRowData] = useState(null);
  const handleEditBtn = (row) => {
    console.log(formData);
    document.getElementById("my_modal_4").showModal();
    if (field === "result") {
      setFormData(row.result);
      setRowData(row);
    } else {
      setFormData(row);
    }
  };
  const handleDeleteBtn = async ({ _id }) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/${field}/${_id}`
      );
      setData(data.data);
      SuccessToast(data.message);
    } catch (err) {
      ErrorToast("Server Error. Try again later!");
    }
  };
  const handleViewBtn = () => {
    console.log("Result View Button working .....");
  };
  const modalOpen = () => {
    if (field === "admin") {
      return (
        <AdminModalContainer
          formData={formData}
          setFormData={setFormData}
          setData={setData}
        />
      );
    } else if (field === "result") {
      return (
        <ResultModalContainer
          formData={formData}
          setFormData={setFormData}
          setData={setData}
          rowData={rowData}
        />
      );
    } else {
      return (
        <StudentModalContainer
          formData={formData}
          setFormData={setFormData}
          setData={setData}
        />
      );
    }
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
          <IconButton onClick={() => handleEditBtn(row.original)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        {field === "student" || (
          <Tooltip title="Delete">
            <IconButton
              color="error"
              onClick={() => handleDeleteBtn(row.original)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    ),
  });
  return (
    <>
      <MaterialReactTable table={table} />
      {modalOpen()}
    </>
  );
};
export default TableContainer;
