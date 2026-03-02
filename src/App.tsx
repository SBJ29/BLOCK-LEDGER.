import React, { useState } from "react";
import "./styles.css";

// --- THE COMPLETE TRUTH vs. FALSE DATASET ---
const blockchainRegistry: any = {
  // TRUE RECORDS (High Trust)
  "@cyber_police_hq": {
    status: "Official Authority",
    agency: "National Cyber Task Force",
    score: 100,
    peopleVerified: 15420,
    agencyEndorsed: true,
    history: "Root identity verified via Government Blockchain Node.",
    type: "Trusted",
  },
  "@official_support": {
    status: "Verified Business",
    agency: "Meta/X Security",
    score: 98,
    peopleVerified: 8900,
    agencyEndorsed: true,
    history: "Consistently verified by 3rd party security audits.",
    type: "Trusted",
  },

  // FALSE RECORDS (High Risk)
  "@gift_manager_2026": {
    status: "Blacklisted",
    agency: "AI Fraud Detector",
    score: 12,
    peopleVerified: 0,
    agencyEndorsed: false,
    history: "Linked to 4 separate phishing campaigns in 2025.",
    reason: "Malicious Redirect Link",
    type: "Scammer",
  },
  "@bank_verify_bot": {
    status: "Blacklisted",
    agency: "Financial Security",
    score: 5,
    peopleVerified: 0,
    agencyEndorsed: false,
    history: "Banned 12 times. Operates via automated bot-nets.",
    reason: "Identity Theft Attempt",
    type: "High Risk",
  },
};

export default function App() {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleCheck = () => {
    const lookup = username.toLowerCase().trim();
    const data = blockchainRegistry[lookup];

    if (data) {
      setResult(data);
    } else {
      setResult({
        status: "Unverified",
        agency: "None",
        score: 35,
        peopleVerified: 0,
        agencyEndorsed: false,
        history: "New or private profile. No community trust established.",
        warning: "Zero Trust Score: Use Extreme Caution",
        type: "Unknown",
      });
    }
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "24px",
          padding: "35px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>🔍</div>
          <h1
            style={{
              margin: "0",
              color: "#1e293b",
              fontSize: "26px",
              fontWeight: "800",
            }}
          >
            Identity Ledger v3.0
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Blockchain-Backed Forensic Analysis
          </p>
        </header>

        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Search handle (e.g., @cyber_police_hq)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "14px",
              border: "2px solid #e2e8f0",
              boxSizing: "border-box",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        <button
          onClick={handleCheck}
          style={{
            width: "100%",
            padding: "16px",
            background: "#0f172a",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.2s",
          }}
        >
          Scan Blockchain Ledger
        </button>

        {result && (
          <div
            style={{
              marginTop: "30px",
              padding: "25px",
              borderRadius: "20px",
              background: result.score > 70 ? "#f0fdf4" : "#fef2f2",
              border: `2px solid ${result.score > 70 ? "#22c55e" : "#ef4444"}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <span
                style={{
                  padding: "6px 14px",
                  background: result.score > 70 ? "#22c55e" : "#ef4444",
                  color: "#fff",
                  borderRadius: "30px",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {result.status.toUpperCase()}
              </span>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "900",
                  color: "#1e293b",
                }}
              >
                {result.score}% Trust
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "12px",
                  textAlign: "center",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#2563eb",
                  }}
                >
                  {result.peopleVerified.toLocaleString()}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64748b",
                    textTransform: "uppercase",
                  }}
                >
                  People Verified
                </div>
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "12px",
                  textAlign: "center",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: result.agencyEndorsed ? "#166534" : "#94a3b8",
                  }}
                >
                  {result.agencyEndorsed ? "YES" : "NO"}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64748b",
                    textTransform: "uppercase",
                  }}
                >
                  Cyber Endorsed
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "15px",
                background: "rgba(255,255,255,0.5)",
                borderRadius: "12px",
                fontSize: "13px",
                color: "#334155",
              }}
            >
              <strong>Digital Footprint:</strong>
              <p style={{ margin: "5px 0 0", fontStyle: "italic" }}>
                {result.history}
              </p>
              {result.reason && (
                <p
                  style={{
                    marginTop: "10px",
                    color: "#b91c1c",
                    fontWeight: "bold",
                  }}
                >
                  🛑 Offense: {result.reason}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "25px",
          fontSize: "13px",
          color: "#94a3b8",
        }}
      >
        Demo Profiles:{" "}
        <code style={{ color: "#2563eb" }}>@cyber_police_hq</code> |{" "}
        <code style={{ color: "#dc2626" }}>@bank_verify_bot</code>
      </p>
    </div>
  );
}
