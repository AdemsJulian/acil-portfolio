import { useMemo, useState } from "react";
import {
  personalInfo,
  highlights,
  skills,
  experience,
  education,
  projects,
} from "./data/profile";
import "./App.css";

const PROFILE_IMG = "/profile.jpg";

function App() {
  const [showImage, setShowImage] = useState(true);
  const whatsappNumber = personalInfo.phone.replace(/\D/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20Adam,%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut.`;
  const contactItems = useMemo(
    () => [
      {
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        external: false,
      },
      {
        label: "WhatsApp",
        value: personalInfo.phone,
        href: whatsappLink,
        external: true,
      },
      {
        label: "Website",
        value: personalInfo.website.replace(/^https?:\/\//, ""),
        href: personalInfo.website,
        external: true,
      },
      {
        label: "LinkedIn",
        value: personalInfo.linkedin.replace(
          /^https?:\/\/(www\.)?linkedin\.com\//,
          ""
        ),
        href: personalInfo.linkedin,
        external: true,
      },
    ],
    [whatsappLink]
  );

  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="hero__nav">
          <span className="hero__signature">Adam Juliansyah</span>
          <div className="hero__links">
            <a href="#about">Tentang</a>
            <a href="#skills">Keahlian</a>
            <a href="#experience">Pengalaman</a>
            <a href="#projects">Proyek</a>
            <a href="#contact">Kontak</a>
          </div>
        </nav>
        <div className="hero__content">
          <div className="hero__intro">
            <p className="hero__kicker">Software & Automation Developer</p>
            <h1>
              Hai, saya {personalInfo.name}. Saya membangun solusi digital yang
              membantu bisnis bekerja lebih cerdas.
            </h1>
            <p className="hero__summary">{personalInfo.summary}</p>
            <div className="hero__cta">
              <a
                className="button primary"
                href={personalInfo.cvFile}
                target="_blank"
                rel="noreferrer"
              >
                Unduh CV
              </a>
              <a className="button secondary" href={`mailto:${personalInfo.email}`}>
                Hubungi Saya
              </a>
            </div>
            <div className="hero__contact">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
          <div className="hero__avatar-wrapper">
            {showImage ? (
              <img
                className="hero__avatar"
                src={PROFILE_IMG}
                alt={`Foto profil ${personalInfo.name}`}
                onError={() => setShowImage(false)}
              />
            ) : (
              <div className="hero__avatar hero__avatar--fallback">
                {personalInfo.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
            )}
            <span className="hero__location">{personalInfo.location}</span>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section__header">
            <span className="section__kicker">Tentang</span>
            <h2>Profil Singkat</h2>
          </div>
          <div className="section__grid">
            <div className="section__content">
              <p>
                Saya fokus pada pengembangan aplikasi internal dan automasi
                proses bisnis. Kombinasi pengalaman software development dan
                dukungan IT membuat saya nyaman berkolaborasi dengan berbagai
                fungsi untuk menyelesaikan masalah dengan cepat dan terukur.
              </p>
            </div>
            <ul className="section__list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section__header">
            <span className="section__kicker">Keahlian</span>
            <h2>Teknis & Soft Skills</h2>
          </div>
          <div className="skills">
            <div>
              <h3>Teknis</h3>
              <ul className="skills__tags">
                {skills.technical.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Soft Skills</h3>
              <ul className="skills__tags">
                {skills.soft.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section__header">
            <span className="section__kicker">Pengalaman</span>
            <h2>Perjalanan Profesional</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline__item">
                <div className="timeline__meta">
                  <span className="timeline__period">{item.period}</span>
                  <span className="timeline__company">{item.company}</span>
                </div>
                <div className="timeline__body">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__header">
            <span className="section__kicker">Proyek</span>
            <h2>Kontribusi Terpilih</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article key={project.name} className="projects__card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="projects__stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__header">
            <span className="section__kicker">Pendidikan</span>
            <h2>Riwayat Akademis</h2>
          </div>
          <div className="education">
            {education.map((item) => (
              <article key={item.program} className="education__item">
                <div>
                  <h3>{item.program}</h3>
                  <span className="education__institution">
                    {item.institution}
                  </span>
                </div>
                <div className="education__meta">
                  <span>{item.period}</span>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--highlight">
          <div className="section__header">
            <span className="section__kicker">Kontak</span>
            <h2>Tertarik bekerja sama?</h2>
          </div>
          <div className="contact">
            <p>
              Mari diskusikan bagaimana saya bisa membantu tim Anda. Saya terbuka
              untuk peran full-time maupun project-based yang berfokus pada
              pengembangan software, automasi proses, atau peningkatan operasional.
            </p>
            <div className="contact__actions">
              <a className="button primary" href={`mailto:${personalInfo.email}`}>
                Kirim Email
              </a>
              <a
                className="button secondary"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          &copy; {new Date().getFullYear()} {personalInfo.name}. Dibangun dengan React
          & Vite.
        </span>
      </footer>
    </div>
  );
}

export default App;
