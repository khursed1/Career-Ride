import { Button } from "../ui/button"
import video_logo from "../../assets/video_icon.svg"
import { useNavigate } from "react-router-dom"
const Landing = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/auth");
    }

    return (
        <>
            <div>{/*This is main container of landing page*/}

                <div className="flex flex-col justify-center items-center pt-[7%]">
                    <div className="m-4">
                        <div className="inline-block text-xl bg-slate-100 rounded-full p-3">
                            <span className="bg-[#9f5bff] p-2 rounded-full inline-flex h-10 w-24 text-white">✨New</span>
                            <span className="p-2 text-slate-700">A smart way to grow using AI &gt;</span>
                        </div>
                    </div>
                    <div className="m-2">
                        <h1 className=" text-6xl font-bold p-1">Elevate your career <span className="text-[#9f5bff]">with AI</span> </h1>
                    </div>
                    <div className="m-2">
                        <h2 className="text-gray-600 text-xl p-1">All You Need for Career Success – Resumes to Interviews</h2>
                    </div>
                    <div className="flex">
                        <div className="p-3">
                            <Button className=" h-14 w-32 text-lg" onClick={navigateToLogin}>Get Started</Button>
                        </div>
                        <div className="p-3">
                            <Button variant='BlackOutline' className=" h-14 text-lg"><img src={video_logo} className="w-5 h-5" />Watch Video</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Landing