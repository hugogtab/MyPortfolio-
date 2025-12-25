"use client";

import { useEffect } from "react";

export default function BellTestLab() {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = "/bell-test.html";
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#111',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Loading Bell Test Lab...</h1>
        <p>If you are not redirected, <a href="/bell-test.html" style={{ color: '#00d4ff' }}>click here</a>.</p>
      </div>
    </div>
  );
}
