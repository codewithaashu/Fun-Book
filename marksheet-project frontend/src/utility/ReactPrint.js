import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Marksheet from "../Certificates/Marksheet";
import CheckEmptyField from "./CheckEmptyField";
import WarningToast from "./WarningToast";

const ReactPrint = ({ formData, setFormData, resultInputRef }) => {
  const componentRef = useRef();
  const afterPrintFunc = () => {
    setFormData({
      course: "",
      studentID: "",
      certificateType: "",
      issueDate: `${new Date().getFullYear()}-06-15`,
    });
    resultInputRef.current.value = "";
  };
  const handlePrint = useReactToPrint({
    documentTitle: formData.certificateType ?? "Certificate",
    content: () => componentRef.current,
    onAfterPrint: () => afterPrintFunc(),
  });

  return (
    <div>
      <div style={{ display: "none" }}>
        <Marksheet ref={componentRef} />
      </div>
      <button
        className="px-10 py-2 text-white bg-blue w-fit self-center rounded-sm mt-5 text-base font-medium disabled:bg-gray-600"
        onClick={handlePrint}
        // disabled={!CheckEmptyField(formData).isAllFieldFilled}
      >
        Print Document
      </button>
    </div>
  );
};
export default ReactPrint;
