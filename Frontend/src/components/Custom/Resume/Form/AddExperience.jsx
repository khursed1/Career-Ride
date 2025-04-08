import { useState } from "react"
import { Input } from "../../../ui/input"
import { Button } from "../../../ui/button";
import RichTextEditor from "../RichTextEditor";
const AddExperience = () => {
    const formField = {
        title: '',
        city: '',
        state: '',
        startDate: '',
        endDate: '',
        workSummary: '',
    }
    const [experienceList, setExperienceList] = useState([
        formField
    ]);
    const handleChange = (index, event) => {

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
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Company Name</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">City</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">State</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Start Date</label>
                                <Input type="date" name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">End Date</label>
                                <Input type="date" name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                        </div>
                    </div>
                ))}
                <div className=" pb-3">
                    {/* Text editor for adding text styles like bold, italic, 
                    bullet lists etc */}
                    <RichTextEditor />
                </div>

                <div className="flex justify-between">
                    <Button variant="outline" className=" text-primary">+ Add More Experience </Button>
                    <Button>Save</Button>
                </div>  
            </div>
        </div>
    )
}

export default AddExperience