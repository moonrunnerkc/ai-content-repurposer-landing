
import React from "react";

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#111', padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', border: '1px solid #eee', borderRadius: '16px', boxShadow: '0 0 16px rgba(0,0,0,0.05)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>🧠 AI Content Repurposing Assistant</h1>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>
          Turn your long-form content into platform-specific formats in seconds. Automatically generate Twitter threads, LinkedIn posts, email snippets, and discussion questions—all from a single input.
        </p>
        <ul style={{ marginTop: '1rem' }}>
          <li>✔️ Save hours of manual rewriting</li>
          <li>✔️ Tailor your voice and tone</li>
          <li>✔️ Built with Tally, Make.com, and OpenAI</li>
        </ul>
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="https://tally.so/r/wvWvB0" style={{ padding: '0.75rem 1.25rem', background: '#111', color: '#fff', borderRadius: '8px', textDecoration: 'none', textAlign: 'center' }}>
            🚀 Try It Now
          </a>
          <a href="https://quartz-mass-2a0.notion.site/AI-Content-Repurposer-Sample-Results-1d7bae369b3580be8713e854f3511358" style={{ padding: '0.75rem 1.25rem', border: '1px solid #111', borderRadius: '8px', textDecoration: 'none', textAlign: 'center' }}>
            📄 View Sample Results
          </a>
        </div>
        <footer style={{ marginTop: '3rem', fontSize: '0.85rem', color: '#888' }}>
          Created by Bradley Kinnard · Built with GPT-4, Make, and Notion
        </footer>
      </div>
    </div>
  );
}

export default App;
