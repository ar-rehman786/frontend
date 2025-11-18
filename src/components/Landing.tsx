import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div>
      <div
      style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: '2.2rem 1.25rem 3rem',
      }}
    >
      {/* Hero */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1.1fr)',
          gap: '2rem',
          alignItems: 'center',
          marginBottom: '3rem',
        }}
      >
        <div>
          <div style={{ marginBottom: '0.9rem', display: 'flex', gap: '0.5rem' }}>
            <div className="axis-chip">
              <span className="axis-chip-badge bg-gray-700 rounded-full px-2 py-1.5 mr-2">NEW</span>
              <span>Market Intelligence & Data Platform</span>
            </div>
          </div>
          <h1
            className="axis-gradient-text"
            style={{
              fontSize: '2.4rem',
              lineHeight: 1.08,
              margin: 0,
              marginBottom: '0.8rem',
              letterSpacing: '0.02em',
            }}
          >
            One-Click Market Intelligence for Real Estate Teams.
          </h1>
          <p
            style={{
              margin: 0,
              marginBottom: '1.4rem',
              color: '#a0a4c0',
              fontSize: '0.98rem',
              maxWidth: '34rem',
            }}
          >
            Upload a CSV, and our engine turns it into a 7-page market intelligence report,
            live dashboard, and verified lead segments — in minutes.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              marginBottom: '0.9rem',
              flexWrap: 'wrap',
            }}
          >
            <a href="#request-demo">
              <button className="btn btn-primary">Request Demo</button>
            </a>
            <button className="btn btn-outline">View Sample Report</button>
            <span style={{ fontSize: '0.78rem', color: '#7a7fad' }}>
              No onboarding required — we run the demo for you.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#7a7fad' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontWeight: 600, color: '#dfe3ff' }}>7-page PDF</span>
              <span>Board-ready market intelligence pack.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontWeight: 600, color: '#dfe3ff' }}>AI Dashboard</span>
              <span>Segments, KPIs, and hot lists auto-built.</span>
            </div>
          </div>
        </div>

        {/* Dashboard preview card */}
        <div
          style={{
            borderRadius: 24,
            padding: '1rem',
            background:
              'radial-gradient(circle at top, rgba(31,226,255,0.12), rgba(5,6,10,1))',
            border: '1px solid rgba(38,42,60,0.9)',
            boxShadow: '0 20px 46px rgba(0,0,0,0.85)',
          }}
        >
          <div
            style={{
              borderRadius: 18,
              padding: '0.8rem 0.9rem',
              background:
                'linear-gradient(135deg, rgba(9,11,25,1), rgba(2,3,8,1))',
              border: '1px solid rgba(55,60,98,0.95)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.7rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#8c90ff',
                    marginBottom: 2,
                  }}
                >
                  Demo Dashboard
                </div>
                <div style={{ fontSize: '0.9rem', color: '#e5e7ff' }}>
                  Wake County – Core Equity Feed
                </div>
              </div>
              <div className="pill-label">Q4 2025 • Raleigh</div>
            </div>

            {/* KPIs miniature */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '0.6rem',
                marginBottom: '0.7rem',
              }}
            >
              {[
                {
                  label: 'Total Records',
                  value: '7,214',
                  change: '+12.4%',
                  positive: true,
                },
                {
                  label: 'Qualified Owners',
                  value: '4,981',
                  change: '+9.1%',
                  positive: true,
                },
                {
                  label: 'Active Refi Window',
                  value: '1,267',
                  change: '+3.8%',
                  positive: true,
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  style={{
                    borderRadius: 12,
                    padding: '0.45rem 0.55rem',
                    background:
                      'radial-gradient(circle at top, rgba(31,226,255,0.13), rgba(8,9,18,0.96))',
                    border: '1px solid rgba(55,60,98,0.9)',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: '#a3a7d6' }}>{kpi.label}</div>
                  <div
                    style={{
                      fontSize: '1rem',
                      fontWeight: 650,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {kpi.value}
                  </div>
                  <div
                    style={{
                      marginTop: 2,
                      fontSize: '0.7rem',
                      color: kpi.positive ? '#69f0ae' : '#ff6b6b',
                    }}
                  >
                    {kpi.change} last quarter
                  </div>
                </div>
              ))}
            </div>

            {/* Mini charts */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
                gap: '0.7rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#a0a4c0',
                    marginBottom: '0.25rem',
                  }}
                >
                  Refi Opportunity Over Time
                </div>
                <div className="chart-placeholder">
                  <div className="chart-line" />
                  <div className="chart-bars">
                    {[35, 60, 45, 80, 55, 70, 95].map((h, idx) => (
                      <div
                        key={idx}
                        className="chart-bar"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: '#a0a4c0',
                    marginBottom: '0.25rem',
                  }}
                >
                  Segment Breakdown
                </div>
                <div
                  style={{
                    borderRadius: 14,
                    border: '1px solid rgba(55,60,98,0.9)',
                    padding: '0.45rem 0.55rem',
                    background:
                      'radial-gradient(circle at top right, rgba(31,226,255,0.12), rgba(8,9,18,0.96))',
                    fontSize: '0.72rem',
                    color: '#a0a4c0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.28rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Core Equity – Ready Now</span>
                    <span style={{ color: '#e5e7ff' }}>38%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>High Equity – 6–12 Months</span>
                    <span style={{ color: '#e5e7ff' }}>27%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Watchlist – Monitor Only</span>
                    <span style={{ color: '#e5e7ff' }}>24%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Do-Not-Contact / Cooldown</span>
                    <span style={{ color: '#e5e7ff' }}>11%</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '0.8rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.8rem',
                fontSize: '0.74rem',
                color: '#8085b0',
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="pill-label">Hot / Warm / Watchlist</span>
                <span className="pill-label">7-Page PDF Export</span>
              </div>
              <Link href="/dashboard/firm">
                <button className="btn-ghost">Open Demo Dashboard →</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section id="use-cases" style={{ marginBottom: '2.4rem' }}>
        <h2
          style={{
            fontSize: '1rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8c90ff',
            marginBottom: '0.8rem',
          }}
        >
          Who It&apos;s For
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            {
              title: 'Brokerages & Teams',
              body: 'Give your agents ranked, ready-to-call lists linked to live dashboards and market intel.',
            },
            {
              title: 'Lenders & Firms',
              body: 'See refinance windows and churn clocks before your competitors do, market by market.',
            },
            {
              title: 'VCs & Partners',
              body: 'Verify traction with 7-page reports, live metrics, and compliance-ready data trails.',
            },
          ].map((card) => (
            <div key={card.title} className="card">
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '0.35rem',
                }}
              >
                {card.title}
              </div>
              <div style={{ fontSize: '0.86rem', color: '#a0a4c0' }}>{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ marginBottom: '2.4rem' }}>
        <h2
          style={{
            fontSize: '1rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8c90ff',
            marginBottom: '0.8rem',
          }}
        >
          How It Works
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            {
              step: '01',
              title: 'Upload CSV',
              body: 'Drop in your market or client list — owners, loans, or refi data. No reformatting required.',
            },
            {
              step: '02',
              title: 'Axis Engine Analyzes',
              body: 'We clean, verify, and score the data, detect refi windows, and segment every record.',
            },
            {
              step: '03',
              title: 'Dashboard & 7-Page PDF',
              body: 'You get an AI dashboard and a board-ready 7-page market intelligence report in minutes.',
            },
          ].map((item) => (
            <div key={item.step} className="card">
              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#a0a4c0',
                  marginBottom: '0.35rem',
                }}
              >
                {item.step}
              </div>
              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  marginBottom: '0.25rem',
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: '0.86rem', color: '#a0a4c0' }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's in the dashboard */}
      <section style={{ marginBottom: '2.4rem' }}>
        <h2
          style={{
            fontSize: '1rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8c90ff',
            marginBottom: '0.8rem',
          }}
        >
          What&apos;s In The Dashboard
        </h2>
        <div className="card">
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '0.6rem',
              listStyle: 'none',
              paddingLeft: 0,
              margin: 0,
              fontSize: '0.86rem',
              color: '#a0a4c0',
            }}
          >
            <li>Hot / warm / watchlist segments ranked by predicted opportunity.</li>
            <li>Core KPIs: total records, qualified owners, refi windows, equity tiers.</li>
            <li>Visual charts for refi opportunity, churn clocks, and equity movement.</li>
            <li>7-page PDF export that mirrors what firms and VCs expect in the boardroom.</li>
          </ul>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        id="request-demo"
        style={{
          marginTop: '1.8rem',
        }}
      >
        <div className="card">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: '1.1rem',
                  margin: 0,
                  marginBottom: '0.25rem',
                }}
              >
                Ready to See Your Market in 7 Pages?
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.86rem',
                  color: '#a0a4c0',
                }}
              >
                Send us a sample CSV and we&apos;ll return a live dashboard walkthrough and a
                7-page report.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <button className="btn btn-primary">Request Demo</button>
              <Link href="/dashboard/firm">
                <button className="btn btn-outline">Preview Dashboard Shell</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Landing
