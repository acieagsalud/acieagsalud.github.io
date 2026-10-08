import { Header } from "@/components/Header";
import { RevealObserver } from "@/components/RevealObserver";
import { Card, SectionHead, delay } from "@/components/Card";
import { GitHubIcon, Icon, LinkedInIcon } from "@/components/Icon";
import {
  about, contact, credentials, experience, profile, projects, skillGroups, work,
} from "@/data/content";

export default function Home() {
  const hasGitHub = !profile.github.includes("YOUR-USERNAME");

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <div className="hero" id="top">
          <div className="wrap">
            <h1 className="reveal">{profile.name}</h1>
            <p className="role reveal" style={delay(0.08)}>{profile.role}</p>
            <p className="intro reveal" style={delay(0.16)}>{profile.intro}</p>
            <div className="actions reveal" style={delay(0.24)}>
              <a className="btn primary" href="#work">View my work</a>
              <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
            </div>
            <div className="socials reveal" style={delay(0.32)}>
              <a href={profile.linkedin} aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
              {hasGitHub && <a href={profile.github} aria-label="GitHub"><GitHubIcon /></a>}
            </div>
            <p className="where reveal" style={delay(0.4)}>
              {profile.location}{profile.status && ` · ${profile.status}`}
            </p>
          </div>
        </div>

        <section id="about" className="soft" aria-labelledby="about-h">
          <div className="wrap">
            <SectionHead eyebrow="About" title="How I work" id="about-h" />
            <div className="about">
              <div className="card reveal">
                <p className="lead">{about.lead}</p>
                {about.paragraphs.map((p, i) => (
                  <p key={i} style={i === about.paragraphs.length - 1 ? { marginBottom: 0 } : undefined}>{p}</p>
                ))}
              </div>
              <div className="card reveal" style={delay(0.12)}>
                {skillGroups.map((g) => (
                  <div className="skillgroup" key={g.title}>
                    <h3>{g.title}</h3>
                    <ul className="tags">
                      {g.items.map((s) => <li key={s} className={g.core ? "core" : undefined}>{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-h">
          <div className="wrap">
            <SectionHead
              eyebrow="Selected work" title="What I've built at work" id="work-h"
              text="Most of this lives inside private enterprise systems, so there are no screenshots. Here's what I was responsible for and what came of it."
            />
            <div className="grid">
              {work.map((item, i) => <Card key={item.title} item={item} index={i} />)}
            </div>
          </div>
        </section>

        <section id="projects" className="soft" aria-labelledby="projects-h">
          <div className="wrap">
            <SectionHead eyebrow="Projects" title="Things I've built on my own time" id="projects-h" text="With code you can read." />
            <div className="grid">
              {projects.map((item, i) => <Card key={item.title} item={item} index={i} />)}
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="exp-h">
          <div className="wrap">
            <SectionHead eyebrow="Experience" title="Where I've worked" id="exp-h" />
            <ol className="timeline">
              {experience.map((job) => (
                <li className="reveal" key={job.title + job.when}>
                  <div className="card">
                    <span className="when">{job.when}</span>
                    <h3>{job.title}</h3>
                    <p className="ctx">{job.org}</p>
                    <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="soft" aria-labelledby="creds-h">
          <div className="wrap">
            <SectionHead eyebrow="Credentials" title="Education and certifications" id="creds-h" />
            <div className="grid">
              {credentials.map((c, i) => (
                <div className="card cred reveal" style={delay(i * 0.08)} key={c.title}>
                  <h3>{c.title}</h3>
                  <p className="org">{c.org}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h">
          <div className="wrap">
            <div className="card cta reveal">
              <span className="eyebrow">Contact</span>
              <h2 id="contact-h">Let&apos;s talk</h2>
              <p>{contact.text}</p>
              <div className="actions">
                <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
                <a className="btn" href={profile.linkedin}>LinkedIn</a>
                {hasGitHub && <a className="btn" href={profile.github}>GitHub</a>}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js and deployed on GitHub Pages.
            Set in Atkinson Hyperlegible, a typeface designed for low-vision readers.
          </p>
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}
