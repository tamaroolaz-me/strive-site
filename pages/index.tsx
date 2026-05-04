import Head from 'next/head'
import Link from 'next/link'

const trialUrl = process.env.NEXT_PUBLIC_TRIAL_URL || '/math#trial'

export default function CoursesIndex() {
  return (
    <>
      <Head>
        <title>Courses — Strive</title>
        <meta name="description" content="Strive offers 1-on-1 online courses in Mathematics and AI-First Software Development for students in Singapore and worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav>
          <div className="nav-inner">
            <a href="https://strivemath.com" className="nav-logo">
              Strive<span>.</span>
            </a>
            <ul className="nav-links">
              <li><Link href="/math">Mathematics</Link></li>
              <li><Link href="/ai-first-software-development">AI-First Software Development</Link></li>
            </ul>
            <a href={trialUrl} className="nav-cta">Book a Free Trial</a>
          </div>
        </nav>

        {/* main is the flex:1 element that vertically centres the grid */}
        <main className="courses-section">
          <div>
            <h1 style={{
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent-purple)',
              marginBottom: '28px',
            }}>
              Our Courses
            </h1>
            <div className="courses-grid">
              <Link href="/math" className="course-card">
                <div className="course-card-left">
                  <div className="course-icon">📐</div>
                  <h2 className="course-title">Mathematics</h2>
                  <p className="course-subtitle">1-on-1 tuition for school &amp; beyond</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </Link>

              <Link href="/ai-first-software-development" className="course-card">
                <div className="course-card-left">
                  <div className="course-icon">💻</div>
                  <h2 className="course-title">AI-First Software Development</h2>
                  <p className="course-subtitle">Build real products with AI tools</p>
                </div>
                <span className="course-badge badge-live">Live</span>
              </Link>

              <div className="course-card coming-soon">
                <div className="course-card-left">
                  <div className="course-icon">🏕️</div>
                  <h2 className="course-title">Holiday Bootcamps</h2>
                  <p className="course-subtitle">Intensive camps during school holidays</p>
                </div>
                <span className="course-badge badge-soon">Coming soon</span>
              </div>

              <div className="course-card coming-soon">
                <div className="course-card-left">
                  <div className="course-icon">✍️</div>
                  <h2 className="course-title">Blog</h2>
                  <p className="course-subtitle">Tips, guides &amp; learning resources</p>
                </div>
                <span className="course-badge badge-soon">Coming soon</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
