import "./navbar.css"

const Navbar = () => {

    return(
        <div className="navbar">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <a href="#contact">cont</a>
                    <a href="#intro">intro</a>
                </div>
                <h1>Middle</h1>
                <div className="nav-right">
                    this is right
                </div>
            </div>
        </div>
    )

}

export default Navbar