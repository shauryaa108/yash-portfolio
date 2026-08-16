import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const navItems = ['Profile', 'My Projects', 'Blogs', 'Contact me']
const projects = [
    {
      number: '01',
      category: 'AI / WEB',
      title: 'AuthenSight-AI',
      description:
        'An AI-powered system designed to analyze and identify potentially manipulated or suspicious content.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      image: '/projects/authensight.png',
      demo: '/authensight',
      github: 'https://github.com/shauryaa108/AuthenSight-AI',
    },
    {
      number: '02',
      category: 'REAL-TIME / WEB',
      title: 'ChatAppy',
      description:
          'A real-time chat application built to learn and experiment with Socket.IO, persistent connections, and server-driven communication.',
      tech: ['React', 'Node.js', 'Socket.IO', 'Arcjet'],
      image: '/projects/chatappy.png',
      demo: '/chatappy',
      github: 'https://github.com/shauryaa108/ChatAppy',
    },
    {
      number: '03',
      category: 'WEB APP',
      title: 'Socialite',
      description:
        'A social platform built to explore real-time interactions, authentication, media handling, and modern web application architecture.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/projects/socialite.png',
      demo: '/socialite',
      github: 'https://github.com/shauryaa108/Socialite',
    },
    {
        number: '04',
        category: 'SEO / WEB TOOL',
        title: 'MarkupLens',
        description:
            'A lightweight website audit tool that analyzes webpages for SEO, accessibility, and basic performance metrics.',
        tech: ['React', 'Node.js', 'Express', 'Cheerio'],
        image: '/projects/markuplens.png',
        demo: '/markuplens',
        github: 'https://github.com/shauryaa108/MarkupLens',
    }
  ];

function Portfolio({ active, setActive }) {
   const navigate = useNavigate();

    const scrollTo = (id, name) => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        setActive(name);
      }
    };
    return (
        <div className="site-shell">
      <aside className="sidebar">
        <div className="avatar-wrap">
            <img
            src="/profile_1.jpg"
            alt="Yash Goyal"
            className="avatar"
          />
          <span className="status-dot" />
        </div>

        <nav className="side-nav" aria-label="Main navigation">
            <button
                className={active === 'Profile' ? 'active' : ''}
                onClick={() => scrollTo('profile', 'Profile')}
            >
                Profile
            </button>

            <button
                className={active === 'My Projects' ? 'active' : ''}
                onClick={() => scrollTo('projects', 'My Projects')}
            >
                My Projects
            </button>

            <button
                className={active === 'Coding' ? 'active' : ''}
                onClick={() => {
                setActive('Coding');
                navigate('/coding-profiles');
                }}
            >
                Coding
            </button>

            <button
                className={active === 'Blogs' ? 'active' : ''}
                onClick={() => scrollTo('blogs', 'Blogs')}
            >
                Blogs
            </button>

            <button
                className={active === 'Contact me' ? 'active' : ''}
                onClick={() => scrollTo('contact', 'Contact me')}
            >
                Contact me
            </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="social-row">
            <a href="https://github.com/shauryaa108" target="_blank" rel="noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/yash-goyal108/" target="_blank" rel="noreferrer">in</a>
            <a href="https://leetcode.com/u/shauryaaaa108/" target="_blank" rel="noreferrer">LC</a>
          </div>
          <p>© 2026 Yash Goyal</p>
          <p>Built with <span aria-label="love">♥</span></p>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <Link
            className="pill pill-light"
            to="/dev.yash.md"
          >
            dev.yash.md
          </Link>
          <a  className="pill pill-dark" 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yashgoyal.ec@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer">Get in touch <span>↗</span></a>
        </header>

        <section id="profile" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">PROFILE / 01</p>
            <h1>Hi, I’m <span>Yash Goyal</span>.</h1>
            <p className="hero-lede">
              I build things for the web, explore systems, and enjoy simplifying messy code.
            </p>
            <div className="tags">
              <span>Backend</span>
              <span>Algorithms</span>
              <span>System Design</span>
              <span>Art and poetry</span>
            </div>
          </div>

          <div className="terminal" aria-label="Developer terminal">
            <div className="terminal-head"><i /><i /><i /></div>
            <div className="terminal-body">
              <p><b>$</b> Human</p>
              <p className="terminal-value">Yash Goyal</p>
              <p className="terminal-value">B.Tech CSE @ IIIT Una</p>
              <p className="terminal-value">Backend Developer</p>
              <p className="terminal-value">Building. Learning. Iterating.</p>
              <p><b>$</b> <span className="cursor" /></p>
            </div>
          </div>
        </section>

        <section className="intro section">
          <p>
            I am interested in core backend fundamentals and work on distributed architecture, AI-powered applications,
            and exlpore the engineering behind products that people use.

          </p>
        </section>

        {/* <section className="featured section">
          <div className="section-heading">
            <p className="eyebrow">FEATURED / 02</p>
            <h2>A problem I encountered — and how I solved it.</h2>
            <p>One problem. Many learnings. Here’s the approach, the trade-offs, and what I built.</p>
            <div className="actions">
              <a className="pill pill-dark" href="#projects">Read the case study <span>↗</span></a>
              <a className="pill pill-light" href="https://github.com/groxyash" target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
          <div className="case-visual">
            <div className="case-label problem">Problem</div>
            <div className="mess">?</div>
            <div className="approach">analyse → design → build → iterate</div>
            <div className="case-label solution">Solution</div>
            <div className="cube">□</div>
          </div>
        </section> */}

        <section id="projects" className="projects-section section">
          <div className="projects-heading">
            <p className="eyebrow">PROJECTS / 02</p>

            <div className="projects-intro">
              <h2>Things I’ve built.</h2>
              <p>
                A selection of things I’ve designed, developed, broken,
                rebuilt, and shipped.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                
                <div className="project-preview">
                  <img src={project.image} alt={`${project.title} preview`} />

                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Link to={project.demo} className="project-explore">
                      Explore <span>↗</span>
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      GitHub <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="blogs" className="placeholder section">
          <p className="eyebrow">BLOGS / 03</p>
          <h2>Things I’ve learned.</h2>
          <p>We’ll connect this to Markdown/MDX posts after the main visual system is locked.</p>
        </section>

        <section id="contact" className="placeholder section contact-section">
          <p className="eyebrow">CONTACT / 04</p>
          <h2>Let’s build something.</h2>
          <a
            className="pill pill-dark"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yashgoyal.ec@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me an email <span>↗</span>
          </a>
        </section>
      </main>
    </div>
    );
}


export default Portfolio