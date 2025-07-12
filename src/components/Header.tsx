import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">Wildfire Veil</div>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>🔥 Home</a></li>
          <li><a href="#donations" onClick={(e) => handleSmoothScroll(e, '#donations')}>💎 Donations</a></li>
          <li><a href="#livestream" onClick={(e) => handleSmoothScroll(e, '#livestream')}>🔮 Livestream</a></li>
          <li><a href="#band" onClick={(e) => handleSmoothScroll(e, '#band')}>🎸 The Band</a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>🏰 About Elloria</a></li>
        </ul>
        
        {isMobileMenuOpen && (
          <div className="mobile-menu open">
            <ul className="nav-links">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>🔥 Home</a></li>
              <li><a href="#donations" onClick={(e) => handleSmoothScroll(e, '#donations')}>💎 Donations</a></li>
              <li><a href="#livestream" onClick={(e) => handleSmoothScroll(e, '#livestream')}>🔮 Livestream</a></li>
              <li><a href="#band" onClick={(e) => handleSmoothScroll(e, '#band')}>🎸 The Band</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>🏰 About Elloria</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};