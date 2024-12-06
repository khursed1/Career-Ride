// dashboard/resume/{resume-id}/edit
import { useParams } from "react-router-dom"
import { ResumeInfoContext } from "../../../context/ResumeInfoContext"
import Header from "../Header"
import FormSection from "./FormSection"
import ResumePreviewSection from "./ResumePreviewSection"
const ResumeEditorLayout = () => {
    function EditResume() {
        const params = useParams();
    }
    return (
        <>
            <Header />
            <ResumeInfoContext.Provider>
                <div className=" grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                    {/* FORM SECTION */}
                    <FormSection />

                    {/* RESUME PREVIEW SECTION */}
                    <ResumePreviewSection />
                </div>
            </ResumeInfoContext.Provider>

        </>
    )
}

export default ResumeEditorLayout