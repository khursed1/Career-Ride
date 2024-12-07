// dashboard/resume/{resume-id}/edit
import { useParams } from "react-router-dom";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import Header from "../Header";
import FormSection from "./FormSection";
import ResumePreviewSection from "./ResumePreviewSection";
import { useEffect, useState } from "react";
import dummy from "../../../data/Dummy";

const ResumeEditorLayout = () => {
    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState(dummy);

    useEffect(() => {
        setResumeInfo(dummy); // Initialize or update as needed
    }, []);

    return (
        <>
            <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                    {/* FORM SECTION */}
                    <div className="">
                        <FormSection />
                    </div>
                    {/* RESUME PREVIEW SECTION */}
                    <div className="">
                        <ResumePreviewSection />
                    </div>
                </div>
            </ResumeInfoContext.Provider>
        </>
    );
};

export default ResumeEditorLayout;
