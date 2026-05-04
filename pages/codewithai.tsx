import Head from 'next/head'
import Link from 'next/link'

const trialUrl = process.env.NEXT_PUBLIC_TRIAL_URL || '/math#trial'

export default function CodeWithAI() {
  return (
    <>
      <Head>
        <title>Code with AI — Strive</title>
        <meta name="description" content="Learn to build software using AI tools as your co-pilot. A practical, project-based course for students ready to create real products." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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

      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '100px 24px 96px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--primary)', marginBottom: '16px' }}>
          Code with AI
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-dark)', lineHeight: 1.6 }}>
          Content coming soon.
        </p>
      </main>
    </>
  )
}
