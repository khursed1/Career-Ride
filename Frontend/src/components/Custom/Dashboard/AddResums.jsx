import addIcon from "../../../assets/AddResumeIcon.svg"
const AddResums = () => {
    return (
        <div className="">
            <div className="pt-5">
                <div className="p-14 py-24 border flex justify-center bg-secondary rounded-md
             hover:scale-105 transition-all hover:shadow-md cursor-pointer h-[90%] w-48">
                    <img src={addIcon} className=""/>
                </div>
                <p className="px-4 pt-3 text-lg text-gray-600">Create Resume</p>
            </div>
            
        </div>
    )
}

export default AddResums