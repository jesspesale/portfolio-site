import "./navbar.css"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Navbar = () => {

    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="nav-left">
            <a href="#intro" className="logo">
              JP
            </a>
            <div className="itemContainer">
              <PersonOutlineIcon fontSize="large" className="icon" />
              <MailOutlineIcon fontSize="large" className="icon" />
            </div>
          </div>

          <div className="nav-right">
            {/* <div className="menu">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div> */}
          </div>
        </div>
      </div>
    );

}

export default Navbar