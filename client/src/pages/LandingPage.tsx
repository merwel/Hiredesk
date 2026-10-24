import { Link } from 'react-router-dom'
import '../styles/landing.css'

export default function LandingPage() {
  return (
    <div className="landing-body">
      {/* NAV */}
      <nav className="landing-nav">
        <div className="logo">
          <span className="logo-main">INTERN DESK</span>
          <span className="logo-sub">&nbsp;by interns, for interns</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#roles">Roles</a></li>
          <li><a href="mailto:heyramb.nm.559@gmail.com">Contact</a></li>
          <li><Link to="/login" className="nav-cta">Get Started →</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="dot" />
            Trusted by 5,000+ professionals
          </div>
          <h1 className="hero-title">
            Your career,<br />
            <em>launched</em> with<br />
            <span className="accent-line">the right desk.</span>
          </h1>
          <p className="hero-desc">
            Intern Desk bridges the gap between ambition and opportunity — connecting interns, mentors, and managers in one seamless workspace.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary-landing">Create free account</Link>
            <a href="#how-it-works" className="btn-ghost-landing">
              See how it works
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">5K+</span>
              <span className="stat-label">Users Registered</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">320+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="cards-stack">
            <div className="float-card card-1">
              <div className="card-tag">✦ New Opportunity</div>
              <div className="card-title">UX Design Intern</div>
              <div className="card-sub">Google · San Francisco</div>
              <div className="card-avatar-row">
                <div className="avatar-sm">SK</div>
                <div className="avatar-sm b">MR</div>
                <div className="avatar-sm c">JL</div>
                <span className="avatar-label">+12 applicants</span>
              </div>
              <span className="card-pill green">Open</span>
            </div>
            <div className="float-card card-2">
              <div className="card-tag">🎓 Mentor Match</div>
              <div className="card-title">Sarah Chen</div>
              <div className="card-sub">Senior PM at Stripe</div>
              <span className="card-pill">Accepting mentees</span>
            </div>
            <div className="float-card card-3">
              <div className="card-tag">📋 Task Update</div>
              <div className="card-title">Sprint Review Done</div>
              <div className="card-sub">3 interns completed onboarding</div>
              <span className="card-pill amber">Manager view</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider-wave" />

      {/* HOW IT WORKS */}
      <section className="section-light" id="how-it-works">
        <div className="section-label">How it works</div>
        <h2 className="section-title">From signup to success<br />in three steps</h2>
        <p className="section-desc">Whether you're kicking off your career or building a team — Intern Desk makes it effortless.</p>
        <div className="steps-grid">
          {[
            { num: '01', title: 'Create your account', text: 'Sign up as an Intern, Mentor, or Manager. Takes under 60 seconds — no credit card, no fuss.' },
            { num: '02', title: 'Connect & match', text: 'Our smart system matches interns with mentors and managers based on goals, skills, and availability.' },
            { num: '03', title: 'Grow & track progress', text: 'Manage tasks, get feedback, track milestones, and build the experience that launches your career.' },
          ].map(step => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section className="section-dark" id="roles">
        <div className="section-label" style={{ color: 'var(--blue-light)' }}>Who's it for</div>
        <h2 className="section-title" style={{ color: '#fff' }}>
          One platform,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--blue-light)' }}>three powerful roles</em>
        </h2>
        <div className="roles-grid">
          <div className="role-card intern-card">
            <div className="role-name">Intern</div>
            <p className="role-desc">Just starting out? Build real-world experience, find a mentor, and land the job you actually want.</p>
            <ul className="role-perks">
              <li>Access curated internship listings</li>
              <li>Get matched with an industry mentor</li>
              <li>Track tasks & build your portfolio</li>
              <li>Get certified on completion</li>
            </ul>
            <Link to="/register?role=intern" className="role-cta-btn">Join as Intern →</Link>
          </div>
          <div className="role-card mentor-card">
            <div className="role-name">Mentor</div>
            <p className="role-desc">Share your expertise, shape careers, and give back to the next generation of professionals.</p>
            <ul className="role-perks">
              <li>Set your availability & mentee cap</li>
              <li>Conduct 1-on-1 guided sessions</li>
              <li>Provide structured feedback</li>
              <li>Earn a verified mentor badge</li>
            </ul>
            <Link to="/register?role=mentor" className="role-cta-btn">Become a Mentor →</Link>
          </div>
          <div className="role-card manager-card">
            <div className="role-name">Manager</div>
            <p className="role-desc">Recruit top intern talent, assign tasks, monitor progress, and build a pipeline for your team.</p>
            <ul className="role-perks">
              <li>Post internship opportunities</li>
              <li>Manage intern cohorts easily</li>
              <li>Real-time progress dashboards</li>
              <li>Direct hiring pipeline access</li>
            </ul>
            <Link to="/register?role=manager" className="role-cta-btn">Register as Manager →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-light-alt">
        <div className="section-label">Testimonials</div>
        <h2 className="section-title">
          Loved by the <em style={{ fontStyle: 'italic', color: 'var(--blue)' }}>people</em><br />who use it every day
        </h2>
        <div className="testimonials-grid">
          {[
            { initials: 'AS', name: 'Aanya Singh', role: 'CS Intern · Infosys', text: '"Intern Desk made my first internship experience so much smoother. My mentor helped me navigate real-world challenges I\'d never have figured out alone."', grad: 'linear-gradient(135deg,#2f7cf0,#8b5cf6)' },
            { initials: 'RK', name: 'Rahul Khanna', role: 'Senior Engineer · Microsoft', text: '"As a mentor, the platform is incredibly well-designed. I can track my mentees\' progress, give structured feedback, and see them grow week over week."', grad: 'linear-gradient(135deg,#10b981,#3b82f6)' },
            { initials: 'PM', name: 'Priya Mehta', role: 'HR Manager · TCS', text: '"Managing 20 interns used to be chaotic. Intern Desk gave me a single dashboard to assign tasks, review progress, and identify top performers."', grad: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
          ].map(t => (
            <div key={t.initials} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.grad }}>{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-eyebrow">Ready to begin?</div>
        <h2 className="cta-title">Your next chapter<br />starts at <em>Intern Desk</em></h2>
        <p className="cta-sub">Join thousands of interns, mentors, and managers already building something great together.</p>
        <div className="cta-buttons">
          <Link to="/register" className="btn-white-landing">Create your account</Link>
          <a href="#how-it-works" className="btn-outline-landing">Learn more</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-logo">INTERN DESK</div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
        <div className="footer-copy">© 2025 Intern Desk. All rights reserved.</div>
      </footer>
    </div>
  )
}
