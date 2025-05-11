/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import addIcon from "../../../assets/AddResumeIcon.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { Input } from "@/components/ui/input"
import {v4 as uuidv4} from 'uuid';

const AddResumsCard = () => {
   const navigate = useNavigate(); 
  const [openDialog, setOpenDialog] = useState(false); 
  const [resumeTitle, setResumeTitle]=useState(); //1.18
  const onCreate=()=>{
    const uuid=uuidv4();
    console.log(resumeTitle, uuid);
    navigate("/dashboard/resume");
  //    navigate(`/dashboard/resume/${uuid}`, {
  //   state: { title: resumeTitle },
  // });
  }
 
  return (
    <div className="">
      <div className="pt-5">
        <div
          className="p-14 py-24 border flex justify-center bg-secondary rounded-md
             hover:scale-105 transition-all hover:shadow-md cursor-pointer h-[90%] w-48"
          onClick={() => setOpenDialog(true)}
        >
          <img src={addIcon} alt="Add Resume" />
        </div>

        {/* ✅ Controlled Dialog with onOpenChange */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Resume</DialogTitle>
              <DialogDescription>
                <p>Add a title for your new resume</p>
                <Input className="mt-2 mb-2" placeholder="Eg. Full Stack Resume" onChange={(e)=>setResumeTitle(e.target.value)}/>
              </DialogDescription>
              <div className="flex justify-end gap-5">
                <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
                <Button disabled={!resumeTitle} onClick={()=>onCreate()} >Create</Button>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <p className="px-4 pt-3 text-lg text-gray-600">Create Resume</p>
      </div>
    </div>
  );
};

export default AddResumsCard;


// import { useState } from "react";
// import addIcon from "../../../assets/AddResumeIcon.svg";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "../../ui/button";
// import { Input } from "@/components/ui/input"


// const AddResumsCard = () => {
//   const [openDialog, setOpenDialog] = useState(false); // ✅ useState inside component

//   return (
//     <div className="">
//       <div className="pt-5">
//         <div
//           className="p-14 py-24 border flex justify-center bg-secondary rounded-md
//              hover:scale-105 transition-all hover:shadow-md cursor-pointer h-[90%] w-48"
//           onClick={() => setOpenDialog(true)}
//         >
//           <img src={addIcon} alt="Add Resume" />
//         </div>

//         {/* ✅ Controlled Dialog with onOpenChange */}
//         <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Create New Resume</DialogTitle>
//               <DialogDescription>
//                 <p>Add a title for your new resume</p>
//                 <Input className="mt-2 mb-2" placeholder="Eg. Full Stack Resume" />
//               </DialogDescription>
//               <div className="flex justify-end gap-5">
//                 <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
//                 <Button>Create</Button>
//               </div>
//             </DialogHeader>
//           </DialogContent>
//         </Dialog>

//         <p className="px-4 pt-3 text-lg text-gray-600">Create Resume</p>
//       </div>
//     </div>
//   );
// };

// export default AddResumsCard;
