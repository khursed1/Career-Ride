import { useContext } from "react"
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext"
import { Input } from "../../../ui/input"
import { Button } from "../../../ui/button"
const AddPersonalDetails = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleInputChange = (e) => {
    //Set the data from form section to preview section
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value
    })
  }
  const onSave = (e) => {
    e.preventDefault();
    // Add logics to save the data into the database
  }
  return (
    <div className="p-5 rounded-lg">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p className=" font-medium text-md">Get Started with basic information</p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="font-[300px]">First Name</label>
            <Input name="firstName" required onChange={handleInputChange} defaultValue={resumeInfo?.firstName} />
          </div>
          <div>
            <label className="font-[300px]">Last Name</label>
            <Input name="lastName" required onChange={handleInputChange} defaultValue={resumeInfo?.lastName} />
          </div>
          <div className="col-span-2">
            <label className="font-[300px]">Job Title</label>
            <Input name="jobTitle" required onChange={handleInputChange} defaultValue={resumeInfo?.jobTitle}/>
          </div>
          <div className="col-span-2">
            <label className="font-[300px]">Address</label>
            <Input name="address" required onChange={handleInputChange} defaultValue={resumeInfo?.address}/>
          </div>
          <div className="">
            <label className="font-[300px]">Phone</label>
            <Input name="phone" required onChange={handleInputChange} defaultValue={resumeInfo?.phone}/>
          </div>
          <div className="">
            <label className="font-[300px]">Email</label>
            <Input name="email" required onChange={handleInputChange} defaultValue={resumeInfo?.email}/>
          </div>

        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default AddPersonalDetails