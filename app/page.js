"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>

      {/* ==================== SIDEBAR ==================== */}

      <Sidebar />

      {/* ==================== MAIN CONTENT ==================== */}

      <div className="main-content">

        {/* ==================== NAVBAR ==================== */}

        <nav className="navbar">
          <ul className="navbar-list">

            {["about", "resume", "portfolio", "contact"].map((page) => (
              <li className="navbar-item" key={page}>

                <button
                  type="button"
                  className={`navbar-link ${
                    activePage === page ? "active" : ""
                  }`}
                  onClick={() => setActivePage(page)}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </button>

              </li>
            ))}

          </ul>
        </nav>

        {/* ==================== PAGES ==================== */}

        {activePage === "about" && <About />}

        {activePage === "resume" && <Resume />}

        {activePage === "portfolio" && <Portfolio />}

        {activePage === "contact" && <Contact />}

      </div>

    </main>
  );
}