import Button from "../button/button";
import Navigate from "@/hooks/navigate";
import "./navbar.css";

const Navbar = () => {    
  return (
    <header className="navbar">
      <div className="half">
        Grade Manager
      </div>

      <div className="half">
        <Button onClick={Navigate("/student/login")}>
          Log In
        </Button>
      </div>
    </header>
  );
}

export default Navbar;