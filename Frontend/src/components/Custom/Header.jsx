import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../provider";
import { Button } from "../ui/button";

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(AuthContext);
  const handleRedirect = () => {
    // add one more function
    navigate("/auth");
  };
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="p-3 px-5 flex justify-between shadow-md">
        <img src={logo} width={150} height={150} />
        <Button onClick={handleRedirect}>
          {loggedIn ? "Dashboard" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
