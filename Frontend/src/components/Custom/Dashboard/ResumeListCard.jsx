/* eslint-disable react/prop-types */
const ResumeListCard = ({ img }) => {
    return (
        <div className="pt-5">
            {
                img ? (<div className="border rounded-xl bg-secondary 
                    hover:scale-105 transition-all hover:shadow-md cursor-pointer h-[90%] w-48">
                    <img src={img} className="w-full h-full" />
                </div>)
                    :
                    (<div className=" rounded-md border bg-secondary 
             hover:scale-105 transition-all hover:shadow-md cursor-pointer h-[90%] w-48">
                    </div>)
            }
        </div>
    )
}

export default ResumeListCard;