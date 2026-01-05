import React, { useEffect } from 'react';
import { portfolioData } from './data';
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code2,
  Briefcase,
  GraduationCap,
  User,
  Download
} from 'lucide-react';

function App() {
  // Simple intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0'; // Hide initially to allow fade-in
      section.style.animationFillMode = 'forwards';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="nav-logo">NP.</a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-content">
          <h1 className="animate-fade-in">{portfolioData.personalInfo.name}</h1>
          <p className="hero-subtitle animate-fade-in delay-100">
            {portfolioData.personalInfo.role}
          </p>

        </div>
      </header>

      <section id="about" className="container">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            {portfolioData.summary}
          </p>

          <div className="grid-2" style={{ marginTop: '3rem' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code2 size={24} color="var(--accent-primary)" /> Skills
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Frontend</h4>
                  <div className="tags-container">
                    {portfolioData.skills.frontend.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Backend</h4>
                  <div className="tags-container">
                    {portfolioData.skills.backend.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Languages & Database</h4>
                  <div className="tags-container">
                    {[...portfolioData.skills.languages, ...portfolioData.skills.databases].map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={24} color="var(--accent-primary)" /> Education
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <h4 style={{ fontSize: '1.2rem' }}>{edu.institution}</h4>
                    <p style={{ color: 'var(--accent-secondary)' }}>{edu.degree}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <span>{edu.duration}</span>
                      <span>{edu.score}</span>
                    </div>
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {edu.place}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="container">
        <h2 className="section-title">Experience</h2>
        <div className="grid-1">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }}>{exp.company}</p>
                </div>
                <span className="tag" style={{ background: 'var(--bg-secondary)' }}>{exp.duration}</span>
              </div>
              <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{exp.description}</p>
              <div className="tags-container">
                {exp.techStack.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid-2">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>{project.name}</h3>

              </div>
              <p style={{ color: 'var(--accent-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>{project.subtitle}</p>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                {project.description.map((desc, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="container">
        <h2 className="section-title">Activities</h2>
        <div className="card">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {portfolioData.extracurricular.map((activity, index) => (
              <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-secondary)', marginTop: '8px' }}></div>
                <span style={{ color: 'var(--text-secondary)' }}>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="container" style={{ paddingBottom: '4rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            <a href={`mailto:${portfolioData.personalInfo.email}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <Mail color="var(--accent-primary)" /> {portfolioData.personalInfo.email}
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <Linkedin color="var(--accent-primary)" /> LinkedIn
            </a>
            <a href={`tel:${portfolioData.personalInfo.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <Phone color="var(--accent-primary)" /> {portfolioData.personalInfo.phone}
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
              <MapPin color="var(--accent-primary)" /> {portfolioData.personalInfo.location}
            </div>
          </div>

          <a href={`mailto:${portfolioData.personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
            Say Hello
          </a>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <p>© 2024 {portfolioData.personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
