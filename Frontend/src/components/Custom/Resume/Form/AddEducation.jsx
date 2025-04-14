import { useContext, useEffect, useState } from "react";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { ApiEnd } from "../../../../provider";
import { toast } from "react-toastify";

const AddEducation = () => {
  const [loading, setLoading] = useState(false);
  const [educationalList, setEducationalList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const RemoveEducation = () => {
    setEducationalList((educationalList) => educationalList.slice(0, -1));
  };
  const handleChange = (index, event) => {
    //THis function is used for handling the input change whenever user type iinto the fields
    const newEntries = educationalList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };

  const onSave = async () => {
    setLoading(true);
    try {
      const { data } = await ApiEnd({
        withCredentials: true,
        method: "POST",
        data: educationalList,
        url: "/api/v1/education_entry",
      });

      toast(data.success ? "success" : "failed");
    } catch (error) {
      toast.error("error happend");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, education: educationalList });
  }, [educationalList]);
  return (
    <div>
      <div className="p-5 rounded-lg"></div>
      <h2 className="font-bold text-lg">Education Details</h2>
      <p>Add your Education Details</p>
      <div>
        {educationalList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
              <div>
                <label htmlFor="">University Name</label>
                <Input
                  name="universityName"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <label htmlFor="">Degree</label>
                <Input name="degree" onChange={(e) => handleChange(index, e)} />
              </div>
              <div>
                <label htmlFor="">Major</label>
                <Input name="major" onChange={(e) => handleChange(index, e)} />
              </div>
              <div>
                <label htmlFor="">Start Date</label>
                <Input
                  name="startDate"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <label htmlFor="">End Date</label>
                <Input
                  name="endDate"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div>
                <label htmlFor="">Description</label>
                <Textarea
                  type="text"
                  name="description"
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className=" text-primary"
              onClick={AddNewEducation}
            >
              + Add More Education{" "}
            </Button>
            {educationalList.length > 1 && (
              <Button
                variant="outline"
                className=" text-primary"
                onClick={RemoveEducation}
              >
                Remove
              </Button>
            )}
          </div>
          <Button disabled={loading} onClick={onSave}>
            {loading ? <LoaderCircle className=" animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEducation;
