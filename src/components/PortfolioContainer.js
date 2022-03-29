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


  return (
    <div>
        <Navbar setCurrentPage={setCurrentPage}/>
        <div></div>
      {/* <Navbar handlePageChange={handlePageChange} currentPage={currentPage} /> */}
      {renderPage()}
    </div>
  )
}