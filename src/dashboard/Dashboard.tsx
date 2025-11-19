"use client";
import React from "react";
import { useEffect, useState } from "react";


  const tabs = [
    "Dashboard",
    "Feeds",
    "Reports",
    "Uploads",
    "QA & Integrity",
    "Settings",
  ];

  
  function useCountUp(end, duration = 1600) {
    const [value, setValue] = useState(0);
    
    useEffect(() => {
      const isPercent = typeof end === "string" && end.includes("%");
      
      const cleanEnd = isPercent
      ? parseFloat(end.replace("%", ""))
      : parseInt(String(end).replace(/,/g, ""), 10);

    let start = 0;
    const increment = cleanEnd / (duration / 16.7);

    const timer = setInterval(() => {
      start += increment;
      if (start >= cleanEnd) {
        setValue(cleanEnd);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16.7);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  // Format output
  if (typeof end === "string" && end.includes("%")) {
    return value.toFixed(1) + "%";
  }
  
  return Math.floor(value).toLocaleString();
}

const KPI_CARDS = [
  {
    label: "Total Records",
    value: "7,214",
    change: "+12.4%",
    positive: true,
  },
  {
    label: "Qualified Owners",
    value: "4,981",
    change: "+9.1%",
    positive: true,
  },
  {
    label: "Active Refi Window",
    value: "1,267",
    change: "+3.8%",
    positive: true,
  },
  {
    label: "High-Equity Owners",
    value: "3,104",
    change: "+5.6%",
    positive: true,
  },
  {
    label: "DNC / Cooldown",
    value: "412",
    change: "-1.2%",
    positive: false,
  },
] as const;

const SEGMENTS = [
  {
    name: "Core Equity – Ready Now",
    records: "2,731",
    pct: "38%",
    notes: "Ranked, ready-to-call, within ideal refi / sell window.",
    tagClass: "",
  },
  {
    name: "High Equity – 6–12 Months",
    records: "1,945",
    pct: "27%",
    notes: "High equity build; watch for rate shifts and life events.",
    tagClass: "warm",
  },
  {
    name: "Watchlist – Monitor Only",
    records: "1,674",
    pct: "24%",
    notes: "Outside immediate window; keep for drip campaigns.",
    tagClass: "watch",
  },
  {
    name: "Do-Not-Contact / Cooldown",
    records: "412",
    pct: "11%",
    notes: "DNC, hard no, or 90-day cooldown enforced by Integrity 3.0.",
    tagClass: "dnc",
  },
] as const;

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "250px minmax(0, 1fr)",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          borderRight: "1px solid rgba(38,42,60,0.9)",
          padding: "1.4rem 1rem",
          background:
            "radial-gradient(circle at top, rgba(31,226,255,0.12), rgba(5,6,10,1))",
        }}
      >
        <div
          style={{
            fontSize: "0.78rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8c90ff",
            marginBottom: "1.2rem",
          }}
        >
          Axis Dashboard
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {tabs.map((item) => {
        const active = activeTab === item; // DYNAMIC

        return (
          <button
            key={item}
            onClick={() => setActiveTab(item)} // CHANGE ACTIVE TAB
            className="btn-ghost"
            style={{
              width: "100%",
              justifyContent: "flex-start",
              borderRadius: 999,

              borderColor: active
                ? "rgba(31,226,255,0.45)"
                : "rgba(38,42,60,1)",

              background: active
                ? "linear-gradient(120deg, rgba(31,226,255,0.18), rgba(105,240,174,0.1))"
                : undefined,

              color: active ? "#e5f7ff" : undefined,
            }}
          >
            {item}
          </button>
        );
      })}
    </nav>
      </aside>

      {/* Main Content */}
      <div
        style={{
          padding: "1.4rem 1.4rem 2rem",
          maxWidth: 1120,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#8c90ff",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Market Overview
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <h1
                style={{
                  fontSize: "1.2rem",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                Wake County – Core Equity Feed
              </h1>
              <span className="pill-label">Feed: APS_Core_Equity_Q4_2025.csv</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <select
              style={{
                background: "rgba(0,0,0,0.6)",
                borderRadius: 999,
                border: "1px solid rgba(38,42,60,0.9)",
                color: "#dfe3ff",
                fontSize: "0.8rem",
                padding: "0.35rem 0.8rem",
                outline: "none",
              }}
              defaultValue="Raleigh"
            >
              <option>Raleigh</option>
              <option>Phoenix</option>
              <option>Charlotte</option>
            </select>
            <select
              style={{
                background: "rgba(0,0,0,0.6)",
                borderRadius: 999,
                border: "1px solid rgba(38,42,60,0.9)",
                color: "#dfe3ff",
                fontSize: "0.8rem",
                padding: "0.35rem 0.8rem",
                outline: "none",
              }}
              defaultValue="Q4 2025"
            >
              <option>Q4 2025</option>
              <option>Q3 2025</option>
              <option>Q2 2025</option>
            </select>

            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "999px",
                border: "1px solid rgba(55,60,98,0.95)",
                background: "radial-gradient(circle at top, #69f0ae, #1fe2ff)",
              }}
              title="User"
            />
          </div>
        </div>

        {/* KPI Row */}
        <div className="kpi-grid" style={{ marginBottom: "1.2rem" }}>
          {KPI_CARDS.map((kpi) => {
            const countValue = useCountUp(kpi.value);
            const countPercent = useCountUp(kpi.change);

            return (
              <div key={kpi.label} className="kpi-card">
                <div className="kpi-label">{kpi.label}</div>

                <div className="kpi-value">{countValue}</div>

                <div className={"kpi-change " + (kpi.positive ? "positive" : "negative")}>
                  <span className="kpi-dot" />
                  <span>{countPercent}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="layout-two-col" style={{ marginBottom: "1.2rem" }}>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Refi Opportunity Over Time</div>
              <span className="pill-label">Quarterly</span>
            </div>

            <div className="chart-placeholder">
              <div className="chart-line" />
              <div className="chart-bars">
                {[28, 45, 55, 80, 64, 72, 92].map((h, idx) => (
                  <div key={idx} className="chart-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Segment Breakdown</div>
              <span className="pill-label">Hot / Warm / Watchlist / DNC</span>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Segment</th>
                  <th>Records</th>
                  <th>% of Total</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {SEGMENTS.map((seg) => (
                  <tr key={seg.name}>
                    <td>
                      <span className="seg-chip">
                        <span
                          className={
                            "seg-dot " +
                            (seg.tagClass === "warm"
                              ? "seg-dot-warm"
                              : seg.tagClass === "watch"
                              ? "seg-dot-watch"
                              : seg.tagClass === "dnc"
                              ? "seg-dot-dnc"
                              : "")
                          }
                        />
                        {seg.name}
                      </span>
                    </td>
                    <td>{seg.records}</td>
                    <td>{seg.pct}</td>
                    <td>{seg.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Segments */}
        <div className="card" style={{ marginBottom: "1.1rem" }}>
          <div className="card-header">
            <div className="card-title">Lead Segments & Actions</div>
            <span style={{ fontSize: "0.78rem", color: "#a0a4c0" }}>
              Connect these buttons to your existing APIs later.
            </span>
          </div>

          <div className="actions-row" style={{ marginBottom: "0.6rem" }}>
            <button className="btn btn-primary">Generate 7-Page PDF</button>
            <button className="btn btn-outline">Export CSV</button>
            <button className="btn btn-outline">Send to Realtor</button>
            <button className="btn btn-outline">Send to Firm</button>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Records</th>
                <th>% of Total</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {SEGMENTS.map((seg) => (
                <tr key={seg.name}>
                  <td>{seg.name}</td>
                  <td>{seg.records}</td>
                  <td>{seg.pct}</td>
                  <td>{seg.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Records Table Placeholder */}
        <div className="records-placeholder">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  marginBottom: "0.1rem",
                  color: "#dfe3ff",
                }}
              >
                Records Table
              </div>
              <div style={{ fontSize: "0.78rem" }}>
                Data grid placeholder – connect to your existing table or API
                once ready.
              </div>
            </div>

            <div className="filter-chips">
              <span className="filter-chip">Segment: All</span>
              <span className="filter-chip">Equity: 20–60%</span>
              <span className="filter-chip">
                ZIP: 27609, 27612, 27613
              </span>
            </div>
          </div>

          <div
            style={{
              borderRadius: 16,
              border: "1px dashed rgba(255,255,255,0.2)",
              padding: "1rem",
              marginTop: "0.5rem",
              fontSize: "0.78rem",
              color: "#7a7fad",
            }}
          >
            This is where your row-level records will appear (owners, loans,
            scores, timestamps). Wire this box to your data grid component or
            back-office table. For now, it simply proves layout and spacing.
          </div>
        </div>

        {/* Compliance Ribbon */}
        <div className="compliance-ribbon">
          <div>
            <strong style={{ color: "#e5e7ff", marginRight: "0.4rem" }}>
              Market Feeds Compliance
            </strong>
            Crypto, Stocks, and Housing panels run on a mandatory 24-hour delay
            for institutional views. The backend enforces the delay; this UI
            just surfaces the label and status.
          </div>

          <div className="badge-delay">
            <span>⚖️</span>
            <span>24h Delay — Informational Analytics Only</span>
          </div>
        </div>

        {/* Feeds */}
        <div className="feeds-grid">
          {/* Crypto Feed */}
          <div className="feed-card">
            <div className="feed-title">
              <span>Crypto Feed (24h Delayed)</span>
              <span className="feed-tag">BTC, ETH, SOL, AVAX, BNB, MATIC</span>
            </div>

            <div className="feed-metrics">
              <span>• 24h / 7d change, volume, dominance, sentiment.</span>
              <span>• Refi heat correlation to market volatility.</span>
              <span>• Equity surge correlation vs. crypto risk cycles.</span>
            </div>

            <ul className="feed-list">
              <li className="feed-pill">BTC • Macro sentiment</li>
              <li className="feed-pill">ETH • Smart contracts</li>
              <li className="feed-pill">SOL • High throughput</li>
              <li className="feed-pill">BNB • Exchange flows</li>
            </ul>

            <div className="feed-footnote">
              Frontend only renders tiles & charts. Delay logic and correlation
              math live in the backend.
            </div>
          </div>

          {/* Stock Feed */}
          <div className="feed-card">
            <div className="feed-title">
              <span>Stock & Rates Feed (24h Delayed)</span>
              <span className="feed-tag">SPX, Nasdaq, RKT, Z, RDFN, LEN, KBH</span>
            </div>

            <div className="feed-metrics">
              <span>• Index moves vs. housing activity.</span>
              <span>• Refi vs. 10-Year Treasury & mortgage rate index.</span>
              <span>• Lender volume vs. rate shocks.</span>
            </div>

            <ul className="feed-list">
              <li className="feed-pill">SPX • Risk-on / off</li>
              <li className="feed-pill">RKT • Refi proxy</li>
              <li className="feed-pill">Z / RDFN • Portal trends</li>
            </ul>

            <div className="feed-footnote">
              Hook these tiles to your existing TradeMarket AI endpoints when
              ready. Today they prove structure and narrative.
            </div>
          </div>

          {/* Housing Feed */}
          <div className="feed-card">
            <div className="feed-title">
              <span>Housing Feed (24h Delayed)</span>
              <span className="feed-tag">
                Listings, DOM, Reductions, Refi Volume
              </span>
            </div>

            <div className="feed-metrics">
              <span>• Active listings, DOM, price cuts, median price.</span>
              <span>• Refi volume & lender activity by ZIP.</span>
              <span>• Churn clocks for sellers & borrowers.</span>
            </div>

            <ul className="feed-list">
              <li className="feed-pill">Active Listings</li>
              <li className="feed-pill">Avg. DOM</li>
              <li className="feed-pill">Price Reductions</li>
              <li className="feed-pill">Refi Volume</li>
            </ul>

            <div className="feed-footnote">
              This section mirrors your 7-page report & dashboards, so firms see
              the same story online and on paper.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
