import { useState } from "react"
import { Input } from "../../../ui/input"
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
                                <label className="text-sm">Position Title</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Position Title</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Position Title</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Position Title</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                            <div>
                                <label className="text-sm">Position Title</label>
                                <Input name="positionTitle" onChange={(event) => handleChange(index, event)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddExperience