const EducationPreview = ({ resumeInfo }) => {
    return (
        <div>
            <div className="my-6">
                <div className=" text-center">
                    <div className=" inline-block">
                        <h2 style={{
                            color: resumeInfo?.headingColor
                        }} className=" font-bold">Education</h2>
                        <hr className="border-[2px] border-gray-600 w-[80%] mx-auto rounded-xl" />
                    </div>
                </div>
                {resumeInfo?.education.map((education, index) => (
                    <div key={index} className="my-5">
                        <h2 className="text-sm font-semibold" style={{ color: resumeInfo.subHeadingColor }}>
                            {education.universityName}
                        </h2>
                        <h2 className="flex justify-between text-xs">
                            {education.degree} in {education.major}
                            <span className="text-xs">{education.startDate} - {education.endDate}</span>
                        </h2>
                        <p className="text-xs my-2">{education.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationPreview

