import { useContext, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummaryPreview from "./preview/SummaryPreview";
import ProfessionalExperience from "./preview/ExperiencePreview";
import EducationPreview from "./preview/EducationPreview";
import SkillsPreview from "./preview/SkillsPreview";
import { Button } from "../../ui/button";
import { Download } from "lucide-react";
import "./ResumePreviewSection.css";

const ResumePreviewSection = () => {
  const pdfRef = useRef();
  const [previewImg, setPreviewImg] = useState(null);
  const { resumeInfo } = useContext(ResumeInfoContext);

  // Generate preview image
  const handlePreview = () => {
    const input = pdfRef.current;

    // Hide preview button before capturing
    const btn = document.getElementById("download-button-div");
    if (btn) btn.style.display = "none";

    html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      setPreviewImg(imgData);
      if (btn) btn.style.display = "block";
    });
  };

  // Generate multi-page PDF
  const handleDownload = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const img = new Image();
    img.src = previewImg;

    img.onload = () => {
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (img.height * imgWidth) / img.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(previewImg, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(previewImg, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("resume.pdf");
    };
  };

  return (
    <div>
      <div
        className="shadow-lg p-14 border-t-[20px] overflow-auto relative bg-white"
        ref={pdfRef}
        style={{ minHeight: "100vh" }}
      >
        {/* Top-right Preview Button */}
        <div className="cls1" id="download-button-div">
          <Button className="cls2" onClick={handlePreview}>
            Preview
            <Download className="cls3" />
          </Button>
        </div>

        <PersonalDetailPreview resumeInfo={resumeInfo} />
        <SummaryPreview resumeInfo={resumeInfo} />
        <ProfessionalExperience resumeInfo={resumeInfo} />
        <EducationPreview resumeInfo={resumeInfo} />
        <SkillsPreview resumeInfo={resumeInfo} />
      </div>

      {/* Preview below */}
      {previewImg && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">PDF Preview</h2>
          <div className="border rounded overflow-auto max-h-[90vh]">
            <img
              src={previewImg}
              alt="Resume Preview"
              className="w-full max-w-[800px] mx-auto"
            />
          </div>
          <Button className="mt-4" onClick={handleDownload}>
            Download PDF
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResumePreviewSection;




/* eslint-disable no-unused-vars */
// import { useContext, useRef } from "react";
// import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
// import PersonalDetailPreview from "./preview/PersonalDetailPreview";
// import SummaryPreview from "./preview/SummaryPreview";
// import ProfessionalExperience from "./preview/ExperiencePreview";
// import EducationPreview from "./preview/EducationPreview";
// import SkillsPreview from "./preview/SkillsPreview";
// import { Button } from "../../ui/button";
// import { Download } from "lucide-react";
// import "./ResumePreviewSection.css";
// import html2canvas from "html2canvas"; //download
// import jspdf from "jspdf"; //download

// const ResumePreviewSection = () => {
//   const pdfRef = useRef(); //download
//   const downloadPDF = () => {
//     const input = pdfRef.current;
//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jspdf("p", "mm", "a4");

//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save("invoice.pdf");
//     });
//   };

//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   return (
//     <div >
//       <div
//         className=" shadow-lg h-screen p-14 border-t-[20px] overflow-scroll"
//         id="scrollable-content" ref={pdfRef}
//       >
//         <div className="cls1">
//           <Button className="cls2">
//             Download
//             <Download className="cls3" />
//           </Button>
//         </div>

//           {/* personal details */}
//           <PersonalDetailPreview resumeInfo={resumeInfo} />
//           {/* Summery */}
//           <SummaryPreview resumeInfo={resumeInfo} />
//           {/* Profession Experience */}
//           <ProfessionalExperience resumeInfo={resumeInfo} />
//           {/* Education section */}
//           <EducationPreview resumeInfo={resumeInfo} />
//           {/* Skills */}
//           <SkillsPreview resumeInfo={resumeInfo} />

//       </div>
//     </div>
//   );
// };

// export default ResumePreviewSection;

// import { useContext, useRef } from "react"
// import { ResumeInfoContext } from "../../../context/ResumeInfoContext"
// import PersonalDetailPreview from "./preview/PersonalDetailPreview";
// import SummaryPreview from "./preview/SummaryPreview";
// import ProfessionalExperience from "./preview/ExperiencePreview";
// import EducationPreview from "./preview/EducationPreview";
// import SkillsPreview from "./preview/SkillsPreview";

// const ResumePreviewSection = () => {

//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   return (
//     <div className=" shadow-lg h-screen p-14 border-t-[20px] overflow-scroll" id="scrollable-content" >
//       {/* personal details */}
//       <PersonalDetailPreview resumeInfo={resumeInfo} />
//       {/* Summery */}
//       <SummaryPreview resumeInfo={resumeInfo} />
//       {/* Profession Experience */}
//       <ProfessionalExperience resumeInfo={resumeInfo} />
//       {/* Education section */}
//       <EducationPreview resumeInfo={resumeInfo} />
//       {/* Skills */}
//       <SkillsPreview resumeInfo={resumeInfo} />
//     </div>
//   )
// }

// export default ResumePreviewSection
