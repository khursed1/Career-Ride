import { useContext, useEffect, useState } from "react"
import { Input } from "../../../ui/input"
import { Button } from "../../../ui/button";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
const AddExperience = () => {
    const formField = {
        title: '',
        companyName: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummary: '',
    }
    const [experienceList, setExperienceList] = useState([
        formField
    ]);

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const handleChange = (index, event) => {
        //THis function is used for handling the input change whenever user type iinto the fields
        const newEntries = experienceList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);

    }
    const handleRichTextEditor = (e, name, index) => {
        const newEntries = experienceList.slice();
        newEntries[index][name] = e.target.value;
        setExperienceList(newEntries);
    }

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            experience: experienceList
        })
    }, [experienceList]);
    const AddNewExperience = () => {
        setExperienceList([...experienceList, formField]);
    }

    const RemoveExperience = () => {
        // in future we need to remove experience based on index so that UX is great
        setExperienceList(experienceList => experienceList.slice(0, -1));
    }


    return (
        <div>
            <div className="p-5 rounded-lg"></div>
            <h2 className="font-bold text-lg">Professional Experience</h2>
            <p>Add your professional experience</p>
            <div>
                {experienceList.map((field, index) => (
                    <div>
                        <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                            {/* position title */}
                            <div>
                                <label className="text-sm">Position Title</label>
                                <Input name="title" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Company Name</label>
                                <Input name="companyName" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">City</label>
                                <Input name="city" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">State</label>
                                <Input name="state" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Start Date</label>
                                <Input type="date" name="startDate" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">End Date</label>
                                <Input type="date" name="endDate" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div className=" pb-3 col-span-2">
                                {/* Text editor for adding text styles like bold, italic, 
                    bullet lists etc */}
                                <RichTextEditor onRichTextEditorChange={(event) => handleRichTextEditor(event, 'workSummary', index)} />
                            </div>
                        </div>

                    </div>
                ))}


                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button variant="outline" className=" text-primary" onClick={AddNewExperience}>+ Add More Experience </Button>
                        <Button variant="outline" className=" text-primary" onClick={RemoveExperience}>Remove </Button>
                    </div>
                    <Button>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default AddExperience