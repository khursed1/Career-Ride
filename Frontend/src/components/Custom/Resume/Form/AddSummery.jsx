import { useContext } from "react"
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext"
import { Textarea } from "../../../ui/textarea"
import { Button } from "../../../ui/button";

const AddSummery = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const handleInputChange = (e) => {
        //Set the data from form section to preview section
        const { name, value } = e.target;
        setResumeInfo({
            ...resumeInfo,
            [name]: value
        })
    }
    return (
        <div className="p-5 rounded-lg">
            <h2 className="font-bold text-lg">Professional Summary</h2>
            <p className="font-medium text-md">Add sort Summary</p>
            <form>
                <Textarea onChange={handleInputChange} name="summary" defaultValue={resumeInfo?.summary} />
            </form>
            <div className="mt-3 flex justify-end">
                <Button type="submit">Save</Button>
            </div>
        </div>
    )
}

export default AddSummery