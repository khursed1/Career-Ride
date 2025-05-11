/* eslint-disable no-unused-vars */
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import AddPersonalDetails from "./Form/AddPersonalDetails";
import { Button } from "../../ui/button";
import { useContext, useRef } from "react";
import { Download, Edit, Edit2 } from "lucide-react";
import editIcon from "../../../assets/Edit.svg";
import AddSummery from "./Form/AddSummery";
import AddExperience from "./Form/AddExperience";
import AddEducation from "./Form/AddEducation";
import AddSkills from "./Form/AddSkills";


//This is used to add/edit details of resume
const FormSection = () => {
  
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div className="overflow-scroll h-screen" id="scrollable-content">
      <div className="flex justify-between border-gray-400 w-[95%] mx-auto">
        <div className="font-bold text-lg flex gap-1">
          {resumeInfo?.ResumeName}{" "}
          <img src={editIcon} className=" h-5 w-5 cursor-pointer" />
        </div>

        {/* <div onClick={downloadPDF}>
          <Button >
            Download
            <Download />
          </Button>
        </div> */}

      </div>

      <div >
        {/* PERSONAL DETAILS */}
        <AddPersonalDetails />
        {/* SUMMERY */}
        <AddSummery />
        {/* EXPERIENCE */}
        <AddExperience />
        {/* EDUCATION */}
        <AddEducation />
        {/* SKILLS */}
        <AddSkills />
      </div>

    </div>
  );
};

export default FormSection;







// import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
// import AddPersonalDetails from "./Form/AddPersonalDetails";
// import { Button } from "../../ui/button";
// import { useContext, useRef } from "react";
// import { Download, Edit, Edit2 } from "lucide-react";
// import editIcon from "../../../assets/Edit.svg";
// import AddSummery from "./Form/AddSummery";
// import AddExperience from "./Form/AddExperience";
// import AddEducation from "./Form/AddEducation";
// import AddSkills from "./Form/AddSkills";
// import html2canvas from "html2canvas"; //download
// import jspdf from "jspdf"; //download

// //This is used to add/edit details of resume
// const FormSection = () => {
//   const pdfRef = useRef(); //download
//   const downloadPDF = () => {
//       const input = pdfRef.current;
//       html2canvas(input, { scale: 2 }).then((canvas) => {
//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jspdf("p", "mm", "a4");
  
//         const imgProps = pdf.getImageProperties(imgData);
//         const pdfWidth = pdf.internal.pageSize.getWidth();
//         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
//         pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//         pdf.save("invoice.pdf");
//       });
//     };
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

//   return (
//     <div className="overflow-scroll h-screen" id="scrollable-content">
//       <div className="flex justify-between border-gray-400 w-[95%] mx-auto">
//         <div className="font-bold text-lg flex gap-1">
//           {resumeInfo?.ResumeName}{" "}
//           <img src={editIcon} className=" h-5 w-5 cursor-pointer" />
//         </div>

//         <div onClick={downloadPDF}>
//           <Button >
//             Download
//             <Download />
//           </Button>
//         </div>

//       </div>

//       <div ref={pdfRef}>
//         {/* PERSONAL DETAILS */}
//         <AddPersonalDetails />
//         {/* SUMMERY */}
//         <AddSummery />
//         {/* EXPERIENCE */}
//         <AddExperience />
//         {/* EDUCATION */}
//         <AddEducation />
//         {/* SKILLS */}
//         <AddSkills />
//       </div>

//     </div>
//   );
// };

// export default FormSection;
