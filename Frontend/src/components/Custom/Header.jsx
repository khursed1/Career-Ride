import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import {Button} from "../ui/button"
const Header = () => {
  const navigate=useNavigate();
  const handleRedirect=()=>{
    navigate("/auth");
  }
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="p-3 px-5 flex justify-between shadow-md">
        <img src={logo} width={150} height={150}/>
        <Button onClick={handleRedirect}>Get Started</Button>
    </div>
    </div>
  )
}

export default Header