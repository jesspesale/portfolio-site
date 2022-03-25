import "./navbar.css"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";

const Navbar = ({setCurrentPage}) => {

    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="nav-items">
            <a href="#intro" className="logo" onClick={() => setCurrentPage("intro")}>
              JP
            </a>
            <a href="#about" className="icon" onClick={() => setCurrentPage("about")}>
              <PersonOutlineIcon fontSize="large" className="icon" />
              <h4 className="about-word">About</h4>
            </a>
            <a href="#projects" className="icon" onClick={() => setCurrentPage("projects")}>
              <ArchiveOutlinedIcon fontSize="large" className="icon" />
              <h4 className="proj-word">Projects</h4>
            </a>
            <a href="#contact" className="icon" onClick={() => setCurrentPage("contact")}>
              <MailOutlineIcon fontSize="large" className="icon" />
              <h4 className="contact-word">Contact</h4>
            </a>
          </div>
        </div>
      </div>
    );

}

export default Navbar