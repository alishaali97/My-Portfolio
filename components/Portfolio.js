export default function Portfolio() {
  return (
    <article className="portfolio active">

      {/* ==================== HEADER ==================== */}

      <header>
        <h2 className="h2 article-title">
          Portfolio
        </h2>
      </header>

      {/* ==================== PROJECTS ==================== */}

      <section className="projects">

        <ul className="project-list">

          {/* ==================== SENTINEL ==================== */}

          <li className="project-item active">

            <div className="project-content">

              <h3 className="h3 project-title">
                SENTINEL — Public Health Signal Intelligence
              </h3>

              <p className="project-category">
                Bioinformatics & AI
              </p>

              <p className="project-description">
                Designed an automated early-warning system monitoring
                global health sources to detect disease outbreak signals
                using NLP and confidence scoring.
              </p>

            </div>

          </li>

          {/* ==================== ANEMIA ==================== */}

          <li className="project-item active">

            <div className="project-content">

              <h3 className="h3 project-title">
                Anemia Severity Classification & Hospital
                Recommendation System
              </h3>

              <p className="project-category">
                Machine Learning
              </p>

              <p className="project-description">
                Built a Random Forest model for anemia classification
                and severity prediction using CBC data, along with a
                hospital recommendation interface.
              </p>

            </div>

          </li>

          {/* ==================== BIO-SEQUENCE ==================== */}

          <li className="project-item active">

            <div className="project-content">

              <h3 className="h3 project-title">
                Bio-Sequence Translation Tool
              </h3>

              <p className="project-category">
                Bioinformatics
              </p>

              <p className="project-description">
                Developed a desktop application for DNA-to-RNA
                transcription, reverse complements, protein translation,
                and six-frame ORF detection with FASTA import/export.
              </p>

            </div>

          </li>

          {/* ==================== HOSPITAL ==================== */}

          <li className="project-item active">

            <div className="project-content">

              <h3 className="h3 project-title">
                Hospital Patient Management & Analytics System
              </h3>

              <p className="project-category">
                Database & Analytics
              </p>

              <p className="project-description">
                Designed a MongoDB database and implemented CRUD
                operations and aggregation pipelines for data analysis
                and reporting.
              </p>

            </div>

          </li>

          {/* ==================== PROTEIN MODELING ==================== */}

          <li className="project-item active">

            <div className="project-content">

              <h3 className="h3 project-title">
                Protein Modeling
              </h3>

              <p className="project-category">
                Bioinformatics
              </p>

              <p className="project-description">
                Worked on protein structure prediction using
                bioinformatics tools including SWISS-MODEL.
              </p>

            </div>

          </li>

          {/* ==================== PAK ART ==================== */}

          <li className="project-item active">

            <div className="project-content">

              <h3 className="h3 project-title">
                PAK Art — E-Commerce Website
              </h3>

              <p className="project-category">
                Web Development
              </p>

              <p className="project-description">
                Built a WordPress and WooCommerce e-commerce website
                with product catalog, shopping cart, and checkout
                functionality.
              </p>

            </div>

          </li>

        </ul>

      </section>

    </article>
  );
}