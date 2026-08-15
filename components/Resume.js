export default function Resume() {
  return (
    <article className="resume active">

      {/* ==================== HEADER ==================== */}

      <header>
        <h2 className="h2 article-title">
          Resume
        </h2>
      </header>

      {/* ==================== PROFILE ==================== */}

      <section className="about-text">

        <h3 className="h3">
          Profile
        </h3>

        <p>
          I am a BS Bioinformatics student at COMSATS University
          Islamabad with hands-on experience in AI-driven data analysis,
          Python-based machine learning, and working with Large Language
          Models including ChatGPT, Claude, and Gemini. I have applied AI
          tools in academic projects and am passionate about prompt
          engineering, generative AI, and emerging technologies. I am eager
          to contribute to real-world AI experiments and proof-of-concept
          projects.
        </p>

      </section>

      {/* ==================== EDUCATION ==================== */}

      <section className="timeline">

        <div className="title-wrapper">

          <div className="icon-box">
            🎓
          </div>

          <h3 className="h3">
            Education
          </h3>

        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              BS in Bioinformatics
            </h4>

            <span>
              COMSATS University Islamabad
            </span>

            <p className="timeline-text">
              Relevant Coursework: Bioinformatics Computing, Data
              Structures & Algorithms, Genomics, Biostatistics, Machine
              Learning in Biological Systems.
            </p>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              FSc (Pre-Medical)
            </h4>

            <span>
              Fatima Jinnah Girls College Gilgit | 2019–2021
            </span>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Matric (Science)
            </h4>

            <span>
              DJ Model High School Danyore, Gilgit | 2018–2019
            </span>

          </li>

        </ol>

      </section>

      {/* ==================== SKILLS ==================== */}

      <section className="skill">

        <h3 className="h3 skills-title">
          Skills
        </h3>

        <ul className="service-list">

          {/* Microsoft Office */}

          <li className="service-item">

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Microsoft Office & Presentation Tools
              </h4>

              <p className="service-item-text">
                MS Office and Canva for creating scientific posters,
                infographics, and slides.
              </p>

            </div>

          </li>

          {/* Bioinformatics Tools */}

          <li className="service-item">

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Bioinformatics Tools & Databases
              </h4>

              <p className="service-item-text">
                Sequence alignment using BLAST and Clustal Omega,
                phylogenetic tree construction using MEGA, genome browsers
                including NCBI, UCSC Genome Browser and ENSEMBL, protein
                analysis using UniProt and ExPASy, SWISS-MODEL, rRNA,
                primer designing tools, and Multiple Sequence Alignment.
              </p>

            </div>

          </li>

          {/* Programming */}

          <li className="service-item">

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Programming & Web Technologies
              </h4>

              <p className="service-item-text">
                Python, Scanpy, NumPy, pandas, Machine Learning including
                KNN and clustering, Prompt Engineering using ChatGPT,
                Claude and Gemini, basic Generative AI, HTML, CSS, Webflow,
                WordPress, basic JavaScript and PHP, Linux, OOP using C++,
                Data Structures using C, and C/C++.
              </p>

            </div>

          </li>

          {/* Laboratory */}

          <li className="service-item">

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Laboratory & Wet Lab Skills
              </h4>

              <p className="service-item-text">
                DNA extraction and quantification, gel electrophoresis,
                PCR, slide preparation and staining, and pedigree analysis.
              </p>

            </div>

          </li>

        </ul>

      </section>

      {/* ==================== ACADEMIC PROJECTS ==================== */}

      <section className="timeline">

        <div className="title-wrapper">

          <div className="icon-box">
            💻
          </div>

          <h3 className="h3">
            Academic Projects
          </h3>

        </div>

        <ol className="timeline-list">

          {/* SENTINEL */}

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              SENTINEL — Public Health Signal Intelligence
            </h4>

            <span>
              Team Project | May 2026
            </span>

            <p className="timeline-text">
              Designed an automated early-warning system monitoring 14
              global health sources every 6 hours to detect disease outbreak
              signals via an 8-step NLP and confidence-scoring pipeline.
            </p>

            <p className="timeline-text">
              Built a z-score based anomaly detector comparing live case
              data against 10 years of seasonal history, plus a
              conflict-detection feature flagging disagreement between
              sources.
            </p>

          </li>

          {/* ANEMIA */}

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Anemia Severity Classification & Hospital Recommendation
              System
            </h4>

            <span>
              Team Project, COMSATS | Dec 2025
            </span>

            <p className="timeline-text">
              Built a Random Forest model classifying anemia type and
              severity from CBC data, achieving 98% accuracy, with a
              complete preprocessing and evaluation pipeline.
            </p>

            <p className="timeline-text">
              Developed a prediction interface recommending nearby
              hospitals with hematology services based on user location.
            </p>

          </li>

          {/* BIO-SEQUENCE */}

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Bio-Sequence Translation Tool
            </h4>

            <span>
              Individual Project, COMSATS | Apr 2026
            </span>

            <p className="timeline-text">
              Built a desktop application using MVC architecture for
              DNA-to-RNA transcription, reverse complements, and protein
              translation, with six-frame ORF detection and a GUI
              supporting FASTA import/export.
            </p>

          </li>

          {/* HOSPITAL */}

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Hospital Patient Management & Analytics System
            </h4>

            <span>
              Team Project, COMSATS | May 2026
            </span>

            <p className="timeline-text">
              Designed a MongoDB database with six collections for a
              multi-branch coffee chain and implemented CRUD operations
              and aggregation pipelines for revenue, sales-trend, and
              inventory insights, with indexing to improve query
              performance.
            </p>

          </li>

          {/* PROTEIN MODELING */}

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Protein Modeling
            </h4>

            <span>
              Individual Project, COMSATS
            </span>

            <p className="timeline-text">
              Collaborated on predicting protein structures using
              bioinformatics tools like SwissModel and rRNA.
            </p>

          </li>

          {/* PAK ART */}

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              PAK Art — E-Commerce Website
            </h4>

            <span>
              Individual Project, COMSATS | 2025
            </span>

            <p className="timeline-text">
              Built a WordPress/WooCommerce e-commerce site with product
              catalog, cart, and secure checkout, customizing the Astra
              theme with Elementor across three product categories.
            </p>

          </li>

        </ol>

      </section>

      {/* ==================== EXPERIENCE ==================== */}

      <section className="timeline">

        <div className="title-wrapper">

          <div className="icon-box">
            💼
          </div>

          <h3 className="h3">
            Experience
          </h3>

        </div>

        <ol className="timeline-list">

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Assistant Teacher
            </h4>

            <span>
              Internship | Feb 2022 – Apr 2022
            </span>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              GitHub, DevOps, Data Management and AI Intern
            </h4>

            <span>
              Internship | June 2025 – Aug 2025
            </span>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              Biotech Lab Gilgit-Baltistan
            </h4>

            <span>
              Internship | June 2025
            </span>

          </li>

          <li className="timeline-item">

            <h4 className="h4 timeline-item-title">
              GIS Remote Sensing
            </h4>

            <span>
              Internship | Sep 2025
            </span>

          </li>

        </ol>

      </section>

      {/* ==================== VOLUNTEER ==================== */}

      <section className="skill">

        <h3 className="h3 skills-title">
          Volunteer & Leadership Experience
        </h3>

        <ul className="service-list">

          <li className="service-item">

            <div className="service-content-box">

              <p className="service-item-text">
                Volunteer work as a management team member in reunion of
                exchange alumni.
              </p>

            </div>

          </li>

          <li className="service-item">

            <div className="service-content-box">

              <p className="service-item-text">
                Volunteer work as a mentor in one day camp.
              </p>

            </div>

          </li>

          <li className="service-item">

            <div className="service-content-box">

              <p className="service-item-text">
                Volunteer work in Girls Guide Association.
              </p>

            </div>

          </li>

        </ul>

      </section>

      {/* ==================== CERTIFICATES ==================== */}

      <section className="skill">

        <h3 className="h3 skills-title">
          Certificates
        </h3>

        <ul className="service-list">

          <li className="service-item">

            <div className="service-content-box">

              <p className="service-item-text">
                Achievement for the completion of the English Access
                Microscholarship Program (2017–2019)
              </p>

            </div>

          </li>

          <li className="service-item">

            <div className="service-content-box">

              <p className="service-item-text">
                Learning Ambassador (2018)
              </p>

            </div>

          </li>

          <li className="service-item">

            <div className="service-content-box">

              <p className="service-item-text">
                Generative AI Developer (Mar–May 2026)
              </p>

            </div>

          </li>

        </ul>

      </section>

      {/* ==================== HOBBIES ==================== */}

      <section className="skill">

        <h3 className="h3 skills-title">
          Hobbies
        </h3>

        <ul className="service-list">

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                AI tools
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                GUI development
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                Digital Marketing
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                Social activities
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                Trekking
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                Camping
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-content-box">
              <p className="service-item-text">
                Exploring new bioinformatics tools
              </p>
            </div>
          </li>

        </ul>

      </section>

    </article>
  );
}