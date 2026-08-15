export default function About() {
  return (
    <article className="about active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hello, I'm Alisha Ali, hailing from the breathtakingly
          beautiful Gilgit-Baltistan. As a dedicated and detail-oriented
          Bioinformatics student with a strong foundation in
          computational biology and a passion for uncovering the
          intricacies of biological systems, I am excited to embark on a
          career that leverages my skills in data analysis, programming,
          and research.
        </p>
      </section>

      <section className="service">

        <h3 className="h3 service-title">
          What I'm doing
        </h3>

        <ul className="service-list">

          {/* Bioinformatics */}

          <li className="service-item">

            <div className="service-icon-box">
              <img
                src="/images/bioinformatic_analyst-removebg-preview.png"
                alt="Bioinformatics"
                width="40"
              />
            </div>

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Bioinformatic Analyst
              </h4>

              <p className="service-item-text">
                Harnessing computational tools to decode complex
                biological data and uncover meaningful insights.
              </p>

            </div>

          </li>

          {/* Web Development */}

          <li className="service-item">

            <div className="service-icon-box">
              <img
                src="/images/icon-dev.svg"
                alt="Web development"
                width="40"
              />
            </div>

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Web Development
              </h4>

              <p className="service-item-text">
                High-quality development of sites at the professional
                level.
              </p>

            </div>

          </li>

          {/* Protein Analysis */}

          <li className="service-item">

            <div className="service-icon-box">
              <img
                src="/images/022feefb-8486-46ce-9a6b-5d1af4d3bc24.png"
                alt="Protein Analysis"
                width="40"
              />
            </div>

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Protein Analysis
              </h4>

              <p className="service-item-text">
                Exploring protein structure and function to understand
                biological processes at the molecular level.
              </p>

            </div>

          </li>

          {/* Multiple Sequence Alignment */}

          <li className="service-item">

            <div className="service-icon-box">
              <img
                src="/images/08c5827c-cf7d-4375-8cfc-bff3f2662c71.png"
                alt="Multiple Sequence Alignment"
                width="40"
              />
            </div>

            <div className="service-content-box">

              <h4 className="h4 service-item-title">
                Multiple Sequence Alignment
              </h4>

              <p className="service-item-text">
                Comparing biological sequences to reveal evolutionary
                relationships and conserved regions.
              </p>

            </div>

          </li>

        </ul>

      </section>

    </article>
  );
}