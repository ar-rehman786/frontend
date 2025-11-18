"use client";

import React from "react";

export type SidebarLink = {
  label: string;
  active?: boolean;
};

export type KpiCard = {
  label: string;
  value: string | number;
  change: string;
  positive: boolean;
};

export type Segment = {
  name: string;
  records: string | number;
  pct: string;
  notes: string;
  tagClass?: "warm" | "watch" | "dnc" | "";
};

export type ChartData = {
  bars: number[];
};

export type FeedCard = {
  title: string;
  tag: string;
  metrics: string[];
  pills: string[];
  footnote: string;
};

interface DashboardProps {
  sidebarLinks: SidebarLink[];
  kpiCards: KpiCard[];
  segments: Segment[];
  chartData: ChartData;
  locationOptions: string[];
  quarterOptions: string[];
  feedCards: FeedCard[];
  recordsFilters: string[];
}

export const Dashboard: React.FC<DashboardProps> = ({
  sidebarLinks,
  kpiCards,
  segments,
  chartData,
  locationOptions,
  quarterOptions,
  feedCards,
  recordsFilters,
}) => {
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
          {sidebarLinks.map((item) => (
            <button
              key={item.label}
              className="btn-ghost"
              style={{
                width: "100%",
                justifyContent: "flex-start",
                borderRadius: 999,
                borderColor: item.active
                  ? "rgba(31,226,255,0.45)"
                  : "rgba(38,42,60,1)",
                background: item.active
                  ? "linear-gradient(120deg, rgba(31,226,255,0.18), rgba(105,240,174,0.1))"
                  : undefined,
                color: item.active ? "#e5f7ff" : undefined,
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div
        style={{
          padding: "1.4rem 1.4rem 2rem",
          maxWidth: 1120,
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Top bar */}
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
            >
              {locationOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
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
            >
              {quarterOptions.map((q) => (
                <option key={q}>{q}</option>
              ))}
            </select>

            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "999px",
                border: "1px solid rgba(55,60,98,0.95)",
                background:
                  "radial-gradient(circle at top, #69f0ae, #1fe2ff)",
              }}
              title="User"
            />
          </div>
        </div>

        {/* KPI GRID */}
        <div className="kpi-grid" style={{ marginBottom: "1.2rem" }}>
          {kpiCards.map((kpi) => (
            <div key={kpi.label} className="kpi-card">
              <div className="kpi-label">{kpi.label}</div>
              <div className="kpi-value">{kpi.value}</div>

              <div
                className={`kpi-change ${kpi.positive ? "positive" : "negative"}`}
              >
                <span className="kpi-dot" />
                <span>{kpi.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CHART + SEGMENTS */}
        <div className="layout-two-col" style={{ marginBottom: "1.2rem" }}>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Refi Opportunity Over Time</div>
              <span className="pill-label">Quarterly</span>
            </div>

            <div className="chart-placeholder">
              <div className="chart-line" />
              <div className="chart-bars">
                {chartData.bars.map((h, idx) => (
                  <div key={idx} className="chart-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="card-title">Segment Breakdown</div>
              <span className="pill-label">
                Hot / Warm / Watchlist / DNC
              </span>
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
                {segments.map((seg) => (
                  <tr key={seg.name}>
                    <td>
                      <span className="seg-chip">
                        <span
                          className={`seg-dot ${
                            seg.tagClass === "warm"
                              ? "seg-dot-warm"
                              : seg.tagClass === "watch"
                              ? "seg-dot-watch"
                              : seg.tagClass === "dnc"
                              ? "seg-dot-dnc"
                              : ""
                          }`}
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

        {/* LEAD SEGMENTS + ACTIONS */}
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
              {segments.map((seg) => (
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

        {/* RECORDS TABLE */}
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
                Data grid placeholder – connect to your existing table or API once
                ready.
              </div>
            </div>

            <div className="filter-chips">
              {recordsFilters.map((f) => (
                <span key={f} className="filter-chip">
                  {f}
                </span>
              ))}
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
            This is where your row-level records will appear.
          </div>
        </div>

        {/* COMPLIANCE */}
        <div className="compliance-ribbon">
          <div>
            <strong style={{ color: "#e5e7ff", marginRight: "0.4rem" }}>
              Market Feeds Compliance
            </strong>
            Crypto, Stocks, and Housing panels run on a mandatory 24-hour delay.
          </div>

          <div className="badge-delay">
            <span>⚖️</span>
            <span>24h Delay — Informational Analytics Only</span>
          </div>
        </div>

        {/* FEEDS GRID */}
        <div className="feeds-grid">
          {feedCards.map((fc, i) => (
            <div className="feed-card" key={i}>
              <div className="feed-title">
                <span>{fc.title}</span>
                <span className="feed-tag">{fc.tag}</span>
              </div>

              <div className="feed-metrics">
                {fc.metrics.map((m, idx) => (
                  <span key={idx}>• {m}</span>
                ))}
              </div>

              <ul className="feed-list">
                {fc.pills.map((p) => (
                  <li key={p} className="feed-pill">
                    {p}
                  </li>
                ))}
              </ul>

              <div className="feed-footnote">{fc.footnote}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
