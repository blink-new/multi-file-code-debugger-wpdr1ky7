import React, { useState, useEffect } from 'react';

export const ProgressSection: React.FC = () => {
  const [fanCount, setFanCount] = useState(1247893451);

  useEffect(() => {
    const interval = setInterval(() => {
      setFanCount(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <div className="progress-section">
        <h2>The Phoenix Rises: Our Progress</h2>
        <div className="fan-counter">
          <div className="fan-count">{fanCount.toLocaleString()}</div>
          <div style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
            🔥 Passionate Fans Supporting Elloria
          </div>
        </div>
        
        {/* Two Charity Campaigns */}
        <div className="charity-campaigns">
          <div className="campaign-completed">
            <h3 style={{ color: '#22c55e', marginBottom: '1rem' }}>
              ✅ COMPLETED: Emergency Relief
            </h3>
            <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              <strong>$8,000,000</strong> raised of <strong>$8,000,000</strong> goal
            </div>
            <div className="progress-bar">
              <div className="progress-fill-complete"></div>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              🏆 Immediate aid, food, and shelter provided to all Elloria survivors!
            </p>
          </div>
          
          <div className="campaign-ongoing">
            <h3 style={{ color: '#ff6b35', marginBottom: '1rem' }}>
              🔥 ONGOING: Rebuild Elloria
            </h3>
            <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              <strong>$27,900,000</strong> raised of <strong>$45,000,000</strong> goal
            </div>
            <div className="progress-bar">
              <div className="progress-fill-ongoing"></div>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              🏗️ Rebuilding the Great Library, Crystal Gardens, and Academy of Arts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};