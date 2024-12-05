import Header from "../Header"
import ResumeListCard from "./ResumeListCard"
import resumeEg from "../../../assets/resume_eg.jpg"
import AddResumsCard from "./AddResumsCard"

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="p-12 md:px-20 lg:px-32">
                <h2 className="font-bold text-4xl text-gray-800">
                    My Resumes
                </h2>
                <p className="pt-3 text-xl text-gray-600 px-2">Create AI powered Resumes to land a job</p>
                <div className="flex gap-4">
                    <AddResumsCard />
                    <ResumeListCard img={resumeEg} />
                    <ResumeListCard img={null} />
                    <ResumeListCard img={null} />
                    <ResumeListCard img={null} />
                    {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 */}
                </div>
            </div>
        </>
    )
}

export default Dashboard