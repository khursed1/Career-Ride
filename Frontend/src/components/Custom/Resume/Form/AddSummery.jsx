import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Textarea } from "../../../ui/textarea";
import { Button } from "../../../ui/button";
import { ApiEnd } from "../../../../provider";
import { Brain, LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import { GoogleGenAI } from "@google/genai"; // At top
import { ai_api } from "../../../../../Api";
const api_key = ai_api;
//Note api key is in API.jsx
const ai = new GoogleGenAI({ apiKey: api_key });
const AddSummery = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
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
  const handleRefactorClick = async (e) => {
    e.preventDefault();
    setAiLoading(true);
    try {
      const result = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Please rewrite and improve this resume summary professionally: Note i will be using this response
        directly in my ai powered resume builder app, so dont include response like "here is the refactored ....." just give the response which can be directly pasted into summry section of resume 
        without any modification. Note also dont make it too long i want the resume to be ats friendly \n${resumeInfo.summary}`,
      });
      const improvedSummary = await result.candidates[0].content.parts[0].text;
      setResumeInfo((prev) => ({
        ...prev,
        summary: improvedSummary,
      }));
    } catch (error) {
      console.error("AI Refactor Error:", error);
    } finally {
      setAiLoading(false);
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
          value={resumeInfo?.summary}
        />
      </form>
      <div className="mt-3 flex justify-end">
        <div className="mx-4">
          <Button
            onClick={handleRefactorClick}
            className="flex gap-2 text-sm border-primary text-primary"
            variant="outline"
          >
            <Brain className="h-4 w-4" />
            {aiLoading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Refactor with AI"}
          </Button>
        </div>
        <Button type="submit" onClick={handleclick}>
          Save {loading && <LoaderCircle className=" animate-spin" />}
        </Button>

      </div>
    </div>
  );
};

export default AddSummery;
