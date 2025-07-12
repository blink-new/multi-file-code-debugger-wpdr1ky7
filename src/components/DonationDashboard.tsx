import React, { useState, useEffect } from 'react';

interface Donation {
  name: string;
  avatar: string;
  amount: number;
  message: string;
  time: string;
  badge: string;
}

interface Kingdom {
  id: string;
  name: string;
  ruler: string;
  donation: string;
  icon: string;
  message: string;
  story: string;
  effect: string;
}

interface DonationDashboardProps {
  openModal: (content: string) => void;
}

export const DonationDashboard: React.FC<DonationDashboardProps> = ({ openModal }) => {
  const [activeTab, setActiveTab] = useState('live-feed');
  const [liveDonationCount, setLiveDonationCount] = useState(0);
  const [totalDonors, setTotalDonors] = useState(125891);
  const [liveDonations, setLiveDonations] = useState<Donation[]>([
    {
      name: "Sir Galahad the Brave",
      avatar: "⚔️",
      amount: 5000,
      message: "For every fallen comrade who believed in Elloria's future!",
      time: "Just now",
      badge: "Phoenix Patron",
    },
    {
      name: "Lady Moonwhisper",
      avatar: "🌙",
      amount: 2500,
      message: "The moon shows me visions of Elloria restored.",
      time: "30 seconds ago",
      badge: "Veil Guardian",
    },
    {
      name: "Captain Stormheart",
      avatar: "⚡",
      amount: 1000,
      message: "My crew sailed through storms to make this donation!",
      time: "1 minute ago",
      badge: "Inferno Tier",
    },
    {
      name: "Young Mage Spark",
      avatar: "✨",
      amount: 25,
      message: "Saved my lunch coins for three months! Every spark matters!",
      time: "2 minutes ago",
      badge: "Spark Igniter",
    },
  ]);

  const recentDonations: Donation[] = [
    {
      name: "Dragon Keeper Flameheart",
      avatar: "🐉",
      amount: 3000,
      message: "My dragon Emberwing wanted to contribute her favorite ruby!",
      time: "5 minutes ago",
      badge: "Inferno Tier",
    },
    {
      name: "Healer Moonblossom",
      avatar: "🌺",
      amount: 500,
      message: "The Crystal Gardens once saved my daughter's life.",
      time: "8 minutes ago",
      badge: "Blaze Supporter",
    },
    {
      name: "Blacksmith Ironforge",
      avatar: "🔨",
      amount: 300,
      message: "Free metalwork tools for the rebuilding efforts!",
      time: "12 minutes ago",
      badge: "Blaze Supporter",
    },
    {
      name: "Farmer Greenthumb",
      avatar: "🌾",
      amount: 50,
      message: "From my wheat fields to Elloria's future!",
      time: "15 minutes ago",
      badge: "Spark Igniter",
    },
    {
      name: "Bard Melody Windsong",
      avatar: "🎵",
      amount: 200,
      message: "I'll compose a song for every dollar donated today!",
      time: "18 minutes ago",
      badge: "Spark Igniter",
    },
  ];

  const kingdoms: Kingdom[] = [
    {
      id: 'zaeson',
      name: "Kingdom of Zaeson",
      ruler: "Teisaku Bugoli",
      donation: "$100,000",
      icon: "💰",
      message: "The famed Phoenix Chest of gold!",
      story: "The legendary Phoenix Chest of gold, passed down through generations, has been opened for Elloria's cause.",
      effect: "The golden coins will fund master craftsmen to rebuild the royal districts"
    },
    {
      id: 'merina',
      name: "Kingdom of Merina",
      ruler: "Junchio",
      donation: "$10,000",
      icon: "💎",
      message: "Crystal lanterns for streetlights",
      story: "Crystal lanterns that never dim, crafted with ancient ice magic to light Elloria's darkened streets.",
      effect: "Eternal streetlights that will guide citizens safely through the night"
    },
    {
      id: 'zameous',
      name: "Kingdom of Zameous",
      ruler: "Ajax Romano",
      donation: "$6,000",
      icon: "🔧",
      message: "Tools and spell scrolls",
      story: "Enchanted tools that work twice as fast and spell scrolls containing blueprints for magical architecture.",
      effect: "Rebuilding will progress at supernatural speed with these magical implements"
    },
    {
      id: 'kowana',
      name: "Kingdom of Kowana Aran",
      ruler: "Royal Court",
      donation: "$4,000",
      icon: "🍞",
      message: "Food & enchanted medical kits",
      story: "Food supplies and medical kits enhanced with healing magic to sustain the rebuilding workers.",
      effect: "No worker will go hungry, and all injuries will heal swiftly"
    },
    {
      id: 'tarnoh',
      name: "Kingdom of Tarnoh",
      ruler: "Rinji Kubo",
      donation: "$3,000",
      icon: "🌲",
      message: "Timber and seeds",
      story: "Sacred timber from the Eternal Forest and seeds that will grow into protective barrier trees.",
      effect: "New forests will shield Elloria from future attacks"
    },
    {
      id: 'ammar',
      name: "Kingdom of Ammar",
      ruler: "Dante & Erissa",
      donation: "$1,000",
      icon: "🌾",
      message: "Grain and healing herbs",
      story: "Grain that multiplies when shared and healing herbs that cure any ailment.",
      effect: "The people of Elloria will never know hunger or sickness again"
    }
  ];

  const leaderboardData = [
    { rank: "👑", name: "Teisaku Bugoli", title: "Kingdom of Zaeson", amount: "$100,000", avatar: "💰" },
    { rank: "🥈", name: "Junchio", title: "Kingdom of Merina", amount: "$10,000", avatar: "💎" },
    { rank: "🥉", name: "Ajax Romano", title: "Kingdom of Zameous", amount: "$6,000", avatar: "🔧" },
    { rank: "4", name: "Kowana Aran", title: "Royal Court", amount: "$4,000", avatar: "🍞" },
    { rank: "5", name: "Rinji Kubo", title: "Kingdom of Tarnoh", amount: "$3,000", avatar: "🌲" },
  ];

  // Simulate new donations
  useEffect(() => {
    const newDonors = [
      { name: "Cosmic Wanderer", avatar: "🌌", amount: 750, message: "From across the stars, for Elloria!" },
      { name: "Guardian Treeheart", avatar: "🌳", amount: 250, message: "The ancient oaks support this cause." },
      { name: "Knight of Dawn", avatar: "🌅", amount: 500, message: "Dawn breaks on a new day for Elloria!" },
      { name: "Ice Priestess", avatar: "❄️", amount: 1000, message: "Crystal magic for crystal gardens!" },
      { name: "Fire Scholar", avatar: "📜", amount: 300, message: "Knowledge shared is power multiplied!" },
    ];

    const interval = setInterval(() => {
      const randomDonor = newDonors[Math.floor(Math.random() * newDonors.length)];
      const newDonation: Donation = {
        ...randomDonor,
        time: "Just now",
        badge: randomDonor.amount >= 500 ? "Blaze Supporter" : "Spark Igniter",
      };

      setLiveDonations(prev => [newDonation, ...prev.slice(0, 9)]);
      setLiveDonationCount(prev => prev + 1);
      setTotalDonors(prev => prev + 1);
    }, Math.random() * 10000 + 5000);

    return () => clearInterval(interval);
  }, []);

  const showKingdomModal = (kingdom: Kingdom) => {
    const content = `
      <h2>${kingdom.name}</h2>
      <h3 style="color: #4a9eff;">Led by: ${kingdom.ruler}</h3>
      <p style="color: #ff6b35; font-size: 2rem; font-weight: bold; text-align: center; margin: 1rem 0;">${kingdom.donation}</p>
      <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
        <h4>📜 Their Story:</h4>
        <p style="margin-top: 0.5rem;">${kingdom.story}</p>
      </div>
      <div style="background: rgba(74,158,255,0.2); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
        <h4>✨ Magical Effect:</h4>
        <p style="font-style: italic; margin-top: 0.5rem;">${kingdom.effect}</p>
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn btn-primary" onclick="alert('✨ Magical thank you sent with royal honors!'); document.querySelector('.modal').style.display = 'none';">
          👑 Send Royal Thanks
        </button>
      </div>
    `;
    openModal(content);
  };

  const expandDonation = (donorName: string) => {
    const content = `
      <h2>Hero Spotlight: ${donorName}</h2>
      <div style="text-align: center; margin: 2rem 0;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🏆</div>
        <p style="font-size: 1.2rem;">Thank you for supporting Elloria's restoration!</p>
      </div>
      <div style="background: rgba(255,107,53,0.2); padding: 1.5rem; border-radius: 10px; margin: 1rem 0;">
        <p>This hero's contribution will help rebuild the Crystal Gardens, restore ancient knowledge, and bring hope back to Elloria!</p>
      </div>
      <div style="text-align: center;">
        <button class="btn btn-primary" onclick="alert('❤️ Magical thank you sent!'); document.querySelector('.modal').style.display = 'none';">
          💌 Send Thanks
        </button>
      </div>
    `;
    openModal(content);
  };

  const renderDonationItem = (donation: Donation, isNew = false) => (
    <div 
      key={`${donation.name}-${donation.time}`}
      className={`donation-item${isNew ? ' new-donation' : ''}`}
      onClick={() => expandDonation(donation.name)}
    >
      <div className="donation-header">
        <div className="donor-info">
          <div className="donor-avatar">{donation.avatar}</div>
          <div>
            <div className="donor-name">
              {donation.name}
              <span className="donor-badge">{donation.badge}</span>
            </div>
            <div className="donation-time">{donation.time}</div>
          </div>
        </div>
        <div className="donation-amount">${donation.amount.toLocaleString()}</div>
      </div>
      <div className="donation-message">{donation.message}</div>
    </div>
  );

  return (
    <section id="donations" className="section">
      <div className="donation-dashboard">
        <h2>Heroes Supporting Elloria</h2>
        
        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card">
            <div className="stat-number">{totalDonors.toLocaleString()}</div>
            <div className="stat-label">Total Heroes</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$127.9K</div>
            <div className="stat-label">Raised</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">87%</div>
            <div className="stat-label">Emergency Complete</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15</div>
            <div className="stat-label">Days Left</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$1,016</div>
            <div className="stat-label">Avg Donation</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$8.5K</div>
            <div className="stat-label">Per Hour</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'live-feed' ? 'active' : ''}`}
            onClick={() => setActiveTab('live-feed')}
          >
            🔴 Live Donations
          </button>
          <button 
            className={`tab-btn ${activeTab === 'kingdoms' ? 'active' : ''}`}
            onClick={() => setActiveTab('kingdoms')}
          >
            👑 Kingdom Sponsors
          </button>
          <button 
            className={`tab-btn ${activeTab === 'leaderboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            🏆 Top Heroes
          </button>
          <button 
            className={`tab-btn ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            ⭐ Recent Support
          </button>
        </div>

        {/* Live Feed Tab */}
        {activeTab === 'live-feed' && (
          <div className="tab-content active">
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>LIVE - Donations updating in real-time</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.9rem' }}>
                🔥 <span>{liveDonationCount}</span> donations in last hour
              </span>
            </div>
            <div className="live-feed">
              {liveDonations.map(donation => renderDonationItem(donation))}
            </div>
          </div>
        )}

        {/* Kingdoms Tab */}
        {activeTab === 'kingdoms' && (
          <div className="tab-content active">
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>The Realms Rally Together</h3>
            <div className="kingdoms-grid">
              {kingdoms.map(kingdom => (
                <div key={kingdom.id} className="kingdom-card" onClick={() => showKingdomModal(kingdom)}>
                  <div className="kingdom-icon">{kingdom.icon}</div>
                  <div className="kingdom-name">{kingdom.name}</div>
                  <div className="kingdom-ruler">{kingdom.ruler}</div>
                  <div className="kingdom-donation">{kingdom.donation}</div>
                  <div className="kingdom-message">"{kingdom.message}"</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="tab-content active">
            <div className="leaderboard">
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>🏆 Hall of Heroes</h3>
              {leaderboardData.map((item, index) => (
                <div key={index} className="leaderboard-item">
                  <div className={`leaderboard-rank ${index < 3 ? `rank-${index + 1}` : ''}`}>
                    {item.rank}
                  </div>
                  <div className="leaderboard-avatar">{item.avatar}</div>
                  <div className="leaderboard-info">
                    <div className="leaderboard-name">{item.name}</div>
                    <div className="leaderboard-title">{item.title}</div>
                  </div>
                  <div className="leaderboard-amount">{item.amount}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Tab */}
        {activeTab === 'recent' && (
          <div className="tab-content active">
            <div style={{ marginBottom: '2rem' }}>
              <h3>🌟 Recent Heroes (Last 24 Hours)</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Latest supporters who joined our cause</p>
            </div>
            <div>
              {recentDonations.map(donation => renderDonationItem(donation))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};