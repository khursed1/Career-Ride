// dashboard/resume/{resume-id}/edit
import Header from "../Header"
import FormSection from "./FormSection"
import ResumePreviewSection from "./ResumePreviewSection"
const ResumeEditorLayout = () => {
    return (
        <>
            <Header />
            <div className=" grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
                {/* FORM SECTION */}
                <FormSection />

                {/* RESUME PREVIEW SECTION */}
                <ResumePreviewSection />
            </div>

        </>
    )
}

export default ResumeEditorLayout