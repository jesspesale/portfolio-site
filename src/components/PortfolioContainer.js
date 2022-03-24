import React, { useState } from "react"
import About from "./About/About"
import ProjectSection from "./Projects/ProjectSection"
import Contact from "./Contact/Contact"
import Navbar from "./Navbar/Navbar"
import Resume from "./Resume/Resume"
import Intro from "./Intro/Intro"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home")

  const renderPage = () => {
    switch (currentPage) {
    //   case "intro":
    //     return <Intro />

      case "about":
        return <About />

      case "projects":
        return <ProjectSection />

      case "contact":
        return <Contact />

      case "resume":
        return <Resume />

      default:
        return <Intro />
    }
  }

//   const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
        <Navbar setCurrentPage={setCurrentPage}/>
      {/* <Navbar handlePageChange={handlePageChange} currentPage={currentPage} /> */}
      {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  )
}

    // if (currentPage === "Projects") {
    //   return <ProjectSection />
    // }
    // if (currentPage === "Contact") {
    //   return <Contact />
    // }
    // return <Intro />