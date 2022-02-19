import "./navbar.css"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";

const Navbar = () => {

    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="nav-left">
            <a href="#intro" className="logo">
              JP
            </a>
            <a href="#about" className="icon">
              <PersonOutlineIcon fontSize="large" className="icon" />
              <h4 className="about-word">About</h4>
            </a>
            <a href="#contact" className="icon">
              <MailOutlineIcon fontSize="large" className="icon" />
              <h4 className="contact-word">Contact</h4>
            </a>
            <a href="#projects" className="icon">
              <ArchiveOutlinedIcon fontSize="large" className="icon" />
              <h4 className="proj-word">Projects</h4>
            </a>
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