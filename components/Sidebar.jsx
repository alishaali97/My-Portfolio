export default function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img
            src="/images/IMG-20250327-WA0163.jpg"
            alt="Alisha Ali"
            width="80"
            style={{ borderRadius: "13%" }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Alisha Ali">
            Alisha Ali
          </h1>

          <p className="title">
            Bioinformatican
          </p>
        </div>

        <button
          className="info_more-btn"
          type="button"
        >
          <span>Show Contacts</span>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">
            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:alishaali456979@gmail.com"
                className="contact-link"
              >
                alishaali456979@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a
                href="tel:+923488837398"
                className="contact-link"
              >
                (+92) 348-8837398
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time>Sep 25, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>
                Danyore, Gilgit-Baltistan
              </address>
            </div>
          </li>

        </ul>

      </div>

    </aside>
  );
}