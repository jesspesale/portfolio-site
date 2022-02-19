import "./navbar.css"

const Navbar = () => {

    return (
      <div className="navbar">
        <div className="nav-wrapper">
          <div className="nav-left">
            <a href="#intro" className="logo">
              JP
            </a>
          </div>
          <a href="#contact">cont</a>
          <div className="nav-right">
            <div className="menu">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Navbar