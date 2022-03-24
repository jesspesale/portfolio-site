import React, { useState } from "react";
// import Navigation from './Navigation';
import About from "./About";
import ProjectSection from "./Projects/ProjectSection";
import Contact from "./Contact";
// import Header from "./Header";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Projects") {
      return <ProjectSection />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  );
}
