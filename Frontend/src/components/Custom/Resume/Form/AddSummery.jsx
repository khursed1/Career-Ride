import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import { ApiEnd } from "../../../../provider";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";

const AddSummery = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    //Set the data from form section to preview section
    const { name, value } = e.target;
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const handleclick = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await ApiEnd({
        withCredentials: true,
        method: "POST",
        data: resumeInfo,
        url: "/api/v1/Update_Summery",
      });

      toast(data.success ? "success" : "failed");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 rounded-lg">
      <h2 className="font-bold text-lg">Professional Summary</h2>
      <p className="font-medium text-md">Add sort Summary</p>
      <form>
        <Textarea
          onChange={handleInputChange}
          name="summary"
          defaultValue={resumeInfo?.summary}
        />
      </form>
      <div className="mt-3 flex justify-end">
        <Button type="submit" onClick={handleclick}>
          Save {loading && <LoaderCircle className=" animate-spin" />}
        </Button>
      </div>
    </div>
  );
};

export default AddSummery;
