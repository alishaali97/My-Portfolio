export default function Contact() {
  return (
    <article className="contact active">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* CONTACT INFORMATION */}

      <section className="contacts-list">

        <div className="contact-item">
          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a
              href="mailto:alishaali456979@gmail.com"
              className="contact-link"
            >
              alishaali456979@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-info">
            <p className="contact-title">Phone</p>

            <a
              href="tel:+923488837398"
              className="contact-link"
            >
              (+92) 348-8837398
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-info">
            <p className="contact-title">Location</p>

            <address>
              Danyore, Gilgit-Baltistan
            </address>
          </div>
        </div>

      </section>

      {/* CONTACT FORM */}

      <section className="contact-form">

        <h3 className="h3 form-title">
          Contact Me
        </h3>

        <form>

          <div className="form-group">

            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
            />

          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            rows={6}
            required
          ></textarea>

          <button
            type="submit"
            className="form-btn"
          >
            Send Message
          </button>

        </form>

      </section>

    </article>
  );
}