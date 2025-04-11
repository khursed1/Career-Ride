import exp from "constants";

const ExperiencePreview = ({ resumeInfo }) => {
    return (
        <div className="my-6">
            <div className="text-center">
                <div className="inline-block">
                    <h2 className="font-bold text-sm mb-1 text-gray-600">
                        Professional Experience
                    </h2>
                    {/* Match the hr width to the text */}
                    <hr className="border-[2px] w-[80%] mx-auto rounded-xl border-gray-600" />
                </div>
            </div>
            {resumeInfo?.experience.map((experience, index) => (
                <div key={index} className="">
                    <h2 className="text-sm font-bold" style={{ color: resumeInfo.headingColor }}>
                        {experience.title}
                    </h2>
                    <h2 className="text-xs flex justify-between">
                        {experience?.companyName}, {experience?.city}, {experience?.state}
                        <span>{experience?.startDate}
                            - {experience?.endDate === "" ? ("Present") : experience.endDate}
                        </span>
                    </h2>
                    {/* <p className="text-xs my-2">
                        {experience.workSummary} 
                    </p> */}
                    
                    <div className="text-xs my-2" dangerouslySetInnerHTML={{ __html: experience?.workSummary }}>
                        {/* THis div is used to show the rich text editor into the preview
                        windows without html tag. Means it will be not treated as plain text */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperiencePreview;
