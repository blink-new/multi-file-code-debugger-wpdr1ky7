import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProgressSection } from './components/ProgressSection'
import { DonationDashboard } from './components/DonationDashboard'
import './App.css'

interface BandMember {
  id: string;
  name: string;
  role: string;
  story: string;
  quote: string;
  fans: string;
  avatar: string;
  gradient: string;
}

interface Location {
  id: string;
  title: string;
  story: string;
  cost: string;
  progress: string;
  survivor: string;
}

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
}

function App() {
  const [modalContent, setModalContent] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: '1', user: 'DragonFan92', message: 'This is amazing! 🔥 Just donated $50!', timestamp: new Date() },
    { id: '2', user: 'StormCaller', message: 'TESSA PLAY STORM OF HOPE! ⚡⚡⚡', timestamp: new Date() },
    { id: '3', user: 'NatureHealer', message: 'Donated $25 for the Crystal Gardens! 🌿', timestamp: new Date() },
    { id: '4', user: 'PhoenixRising', message: '1.2 billion fans can\'t be wrong! 🔥🔥🔥', timestamp: new Date() },
  ])
  const [chatInput, setChatInput] = useState('')
  const [chatViewers, setChatViewers] = useState(2847293)

  const bandMembers: BandMember[] = [
    {
      id: 'reyon',
      name: 'Reylan "Reyon" Harris',
      role: 'Lead Vocals, Rhythm Guitar, Songwriting',
      story: "The band's main voice and primary songwriter. Reyon's soulful vocals and introspective lyrics shape the band's spirit and sound. His songs for Elloria carry the weight of hope and the power to heal wounded hearts.",
      quote: '"Every song we write is a prayer for those who can\'t sing anymore."',
      fans: "423,891,247",
      avatar: "🎤",
      gradient: "linear-gradient(45deg, #ff6b35, #dc2626)"
    },
    {
      id: 'tessa',
      name: 'Tessa Novar',
      role: 'Lead Guitar, Backing Vocals',
      story: "Tessa's fiery riffs and magnetic stage presence drive Wildfire Veil's energy. Fearless, bold, and a natural leader, her guitar work ignites passion in every heart that hears it.",
      quote: '"Music is rebellion against despair, and we\'re leading the charge."',
      fans: "389,247,183",
      avatar: "🎸",
      gradient: "linear-gradient(45deg, #4a9eff, #1e40af)"
    },
    {
      id: 'calla',
      name: 'Calla Fenwick',
      role: 'Bass Guitar, Lyricist, Vocals',
      story: "The soul of the band, Calla's poetic lyrics and evocative harmonies are its emotional core. She also handles the band's unofficial management, keeping everyone grounded while reaching for the stars.",
      quote: '"Words have power, and ours will rebuild more than just buildings."',
      fans: "456,783,291",
      avatar: "🎵",
      gradient: "linear-gradient(45deg, #22c55e, #15803d)"
    },
    {
      id: 'milo',
      name: 'Milo Dray',
      role: 'Drums, Percussion',
      story: "Milo's precise, empathetic drumming is the foundation of their sound. Quiet and steady, he's the glue holding everyone together, providing the heartbeat that keeps hope alive.",
      quote: '"Every beat is a heartbeat, every rhythm a reminder that we\'re alive."',
      fans: "298,473,829",
      avatar: "🥁",
      gradient: "linear-gradient(45deg, #9333ea, #6b21a8)"
    },
    {
      id: 'jules',
      name: 'Jules Avery',
      role: 'Keyboards, Synths, Piano, Backing Vocals',
      story: "Jules weaves shimmering synths and piano textures through every song. Creative and a bit eccentric, they're always experimenting with new sounds that capture the magic of possibility.",
      quote: '"Music is magic made audible, and magic can work miracles."',
      fans: "335,281,192",
      avatar: "🎹",
      gradient: "linear-gradient(45deg, #f59e0b, #d97706)"
    },
    {
      id: 'rowan',
      name: 'Rowan Lin',
      role: 'Acoustic Guitar, Violin, Backing Vocals',
      story: "Rowan's melodic guitar and haunting violin add warmth and depth. Known for their quiet wisdom and knack for finding the perfect harmony, they bring peace to both the music and the band.",
      quote: '"In harmony, we find healing. In melody, we find hope."',
      fans: "367,192,845",
      avatar: "🎻",
      gradient: "linear-gradient(45deg, #8b5cf6, #7c3aed)"
    }
  ]

  const locations: Location[] = [
    {
      id: 'library',
      title: 'The Great Library',
      story: 'Before the war, scholars from across the realms came to study the ancient texts. The library held the collective wisdom of a thousand years, including spells of healing, chronicles of peace, and songs that could mend broken hearts. Now, only ash and memories remain.',
      cost: '$5,000,000',
      progress: '60%',
      survivor: '"I lost my life\'s work when the library burned, but I haven\'t lost hope. The knowledge lives on in our hearts, and together, we can write a new chapter for future generations." - Scholar Miren, Keeper of Ancient Lore'
    },
    {
      id: 'gardens',
      title: 'Crystal Gardens',
      story: 'The magical springs once healed any wound and granted peace to troubled souls. Creatures from all realms would pilgrimage here for healing. The crystals were shattered in the war, but their essence remains in the soil, waiting to bloom again.',
      cost: '$8,000,000',
      progress: '75%',
      survivor: '"My daughter was born with a cursed sickness, but the gardens healed her completely. Now she\'s grown with healing magic of her own, and we both fight to restore what saved our family." - Healer Thane and Luna'
    },
    {
      id: 'academy',
      title: 'Academy of Arts',
      story: 'Young bards, painters, dancers, and musicians learned their craft in these hallowed halls. The building stands, but the instruments, art supplies, and magical teaching tools are gone. The stage where legends were born sits silent.',
      cost: '$6,500,000',
      progress: '45%',
      survivor: '"I was just a student when the war came, learning my first chords. Now I teach children in the ruins, keeping the music alive with our voices alone. But imagine what we could do with proper instruments again!" - Bard Luna Songweaver'
    }
  ]

  const chatAutoMessages = [
    "This gives me chills every time! 🔥",
    "Just donated $100! For Elloria! 💰",
    "REYON'S VOICE IS PURE MAGIC! ✨",
    "Play Crystal Garden Dreams! 🌸",
    "My whole guild is watching! 👑",
    "Donated from the Kingdom of Frost! ❄️",
    "1.2 BILLION FANS STRONG! 🔥",
    "Tessa's guitar solo = LEGENDARY ⚡",
    "Calla's lyrics speak to my soul! 🎵",
    "Milo's drums are the heartbeat of hope! 🥁",
    "Jules' synths are otherworldly! 🎹",
    "Rowan's violin makes me cry! 🎻",
  ]

  const chatUsernames = [
    'MagicFan', 'DragonRider', 'StormMage', 'CrystalHealer', 'PhoenixWarrior', 'StarGazer', 'ForestGuard'
  ]

  // Create animated ember particles
  useEffect(() => {
    const createEmber = () => {
      const ember = document.createElement('div')
      ember.className = 'ember'
      ember.style.left = Math.random() * 100 + '%'
      ember.style.animationDuration = Math.random() * 3 + 3 + 's'
      ember.style.animationDelay = Math.random() * 2 + 's'
      
      const particlesContainer = document.getElementById('ember-particles')
      if (particlesContainer) {
        particlesContainer.appendChild(ember)
        setTimeout(() => ember.remove(), 6000)
      }
    }

    const interval = setInterval(createEmber, 300)
    return () => clearInterval(interval)
  }, [])

  // Auto-generate chat messages
  useEffect(() => {
    const interval = setInterval(() => {
      const username = chatUsernames[Math.floor(Math.random() * chatUsernames.length)] + Math.floor(Math.random() * 9999)
      const message = chatAutoMessages[Math.floor(Math.random() * chatAutoMessages.length)]
      
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        user: username,
        message,
        timestamp: new Date()
      }

      setChatMessages(prev => [newMessage, ...prev.slice(0, 19)])
      setChatViewers(prev => prev + Math.floor(Math.random() * 100))
    }, Math.random() * 3000 + 2000)

    return () => clearInterval(interval)
  }, [])

  const openModal = (content: string) => {
    setModalContent(content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalContent('')
  }

  const showBandMember = (member: BandMember) => {
    const content = `
      <div style="text-align: center;">
        <h2>${member.name}</h2>
        <h3 style="color: #ff6b35;">${member.role}</h3>
        <div style="color: #4a9eff; font-size: 1.2rem; margin: 1rem 0;">
          🔥 ${member.fans} devoted fans
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
        <h4>📖 Their Story:</h4>
        <p style="margin-top: 0.5rem;">${member.story}</p>
      </div>
      <blockquote style="font-style: italic; color: #ff6b35; border-left: 3px solid #ff6b35; padding-left: 1rem; margin: 1.5rem 0; text-align: center; font-size: 1.1rem;">
        ${member.quote}
      </blockquote>
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn btn-primary" onclick="alert('🎵 Fan message sent to ${member.name}!'); document.querySelector('.modal').style.display = 'none';">
          💝 Send Fan Message
        </button>
      </div>
    `
    openModal(content)
  }

  const showLocation = (location: Location) => {
    const content = `
      <h2>${location.title}</h2>
      <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0; padding: 1rem; background: rgba(255,107,53,0.2); border-radius: 10px;">
        <span><strong>Rebuild Cost:</strong> ${location.cost}</span>
        <span style="color: #4a9eff;"><strong>Progress:</strong> ${location.progress}</span>
      </div>
      <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
        <p>${location.story}</p>
      </div>
      <div style="background: rgba(74,158,255,0.2); padding: 1.5rem; border-radius: 10px; margin: 1.5rem 0;">
        <h4>💬 Survivor Story:</h4>
        <p style="font-style: italic; margin-top: 0.5rem;">${location.survivor}</p>
      </div>
      <div style="text-align: center; margin-top: 2rem;">
        <button class="btn btn-primary" onclick="alert('🏗️ Your support for ${location.title} has been recorded!'); document.querySelector('.modal').style.display = 'none';">
          🔥 Support This Rebuild
        </button>
      </div>
    `
    openModal(content)
  }

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        user: 'You',
        message: chatInput,
        timestamp: new Date()
      }
      setChatMessages(prev => [newMessage, ...prev.slice(0, 19)])
      setChatInput('')
      
      // Simulate response
      setTimeout(() => {
        const response: ChatMessage = {
          id: (Date.now() + 1).toString(),
          user: 'WildfireBot',
          message: 'Thanks for your support! 🔥✨',
          timestamp: new Date()
        }
        setChatMessages(prev => [response, ...prev.slice(0, 19)])
      }, 1500)
    }
  }

  return (
    <div className="App">
      {/* Ember Particles */}
      <div id="ember-particles" className="ember-particles"></div>

      <Header />
      <main>
        <HeroSection />
        <ProgressSection />
        <DonationDashboard openModal={openModal} />

        {/* Band Section */}
        <section id="band" className="section">
          <h2>Meet the Wildfire Veil</h2>
          <div className="band-carousel">
            {bandMembers.map(member => (
              <div key={member.id} className="band-member" onClick={() => showBandMember(member)}>
                <div className="band-avatar" style={{ background: member.gradient }}>
                  {member.avatar}
                </div>
                <h3>{member.name}</h3>
                <p>"{member.role}"</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.3rem', fontStyle: 'italic', color: '#ff6b35' }}>
            "Music can rebuild what war destroys. Sing for Elloria."
          </div>
        </section>

        {/* Livestream Section */}
        <section id="livestream" className="section">
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '2rem', margin: '2rem 0' }}>
            <h2>🔴 Experience the Magic Live</h2>
            <div style={{ 
              width: '100%', 
              height: '400px', 
              background: 'linear-gradient(45deg, #1a0f2e, #2d1b3d)', 
              borderRadius: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2rem', 
              color: '#ff6b35', 
              border: '2px solid #ff6b35', 
              marginBottom: '2rem' 
            }}>
              🔴 LIVE: Soundcheck in Progress
            </div>
            
            <div className="chat-container">
              <div className="chat-section">
                <div className="chat-header">
                  <h3>🎵 Tonight's Setlist</h3>
                </div>
                <div style={{ overflowY: 'auto', flex: 1 }}>
                  <div style={{ padding: '0.5rem', margin: '0.5rem 0', background: 'rgba(255,107,53,0.2)', borderRadius: '5px', borderLeft: '4px solid #ff6b35' }}>1. Rise from Ashes</div>
                  <div style={{ padding: '0.5rem', margin: '0.5rem 0', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>2. Crystal Garden Dreams</div>
                  <div style={{ padding: '0.5rem', margin: '0.5rem 0', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>3. Storm of Hope</div>
                  <div style={{ padding: '0.5rem', margin: '0.5rem 0', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>4. Rebuilding Harmony</div>
                  <div style={{ padding: '0.5rem', margin: '0.5rem 0', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>5. Elloria's Dawn</div>
                </div>
              </div>
              
              <div className="chat-section">
                <div className="chat-header">
                  <h3>💬 Live Chat</h3>
                  <span style={{ fontSize: '0.9rem', color: '#ff6b35' }}>
                    🔥 {chatViewers.toLocaleString()} fans watching
                  </span>
                </div>
                <div className="chat-messages" style={{ flex: 1, overflowY: 'auto', padding: '0.5rem', marginBottom: '1rem' }}>
                  {chatMessages.map(message => (
                    <div key={message.id} className="chat-message" style={{ marginBottom: '0.8rem', padding: '0.5rem', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.1)' }}>
                      <span className="chat-user" style={{ fontWeight: 'bold', color: message.user === 'You' ? '#f7931e' : '#ff6b35' }}>
                        {message.user}:
                      </span> {message.message}
                    </div>
                  ))}
                </div>
                <div className="chat-input-area" style={{ display: 'flex', gap: '0.5rem' }}>
                  <input 
                    type="text" 
                    className="chat-input" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Send magical message to 2.8M fans..."
                    style={{ 
                      flex: 1, 
                      padding: '0.8rem', 
                      border: '2px solid #ff6b35', 
                      borderRadius: '20px', 
                      background: 'rgba(255, 255, 255, 0.1)', 
                      color: 'white' 
                    }}
                  />
                  <button className="btn btn-primary" onClick={sendChatMessage} style={{ padding: '0.8rem 1rem' }}>
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Elloria Section */}
        <section id="about" className="section">
          <h2>The Kingdom That Needs Our Voice</h2>
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '20px', padding: '2rem', margin: '2rem 0' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Elloria: Before & After the War</h3>
            <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '15px', marginBottom: '2rem' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, #4ade80, #22c55e, #16a34a)' }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, #7c2d12, #dc2626, #991b1b)', clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)', transition: 'clip-path 0.3s ease' }}></div>
              <div style={{ position: 'absolute', top: 0, left: '50%', width: '4px', height: '100%', background: '#ff6b35', cursor: 'ew-resize', zIndex: 20 }}></div>
            </div>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Drag the slider to see the devastation. Your donation helps rebuild hope.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {locations.map(location => (
                <div 
                  key={location.id}
                  style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '10px', cursor: 'pointer' }}
                  onClick={() => showLocation(location)}
                >
                  <h4>
                    {location.id === 'library' && '📚 The Great Library'}
                    {location.id === 'gardens' && '🌸 Crystal Gardens'}
                    {location.id === 'academy' && '🎭 Academy of Arts'}
                  </h4>
                  <p>
                    {location.id === 'library' && 'Once held 50,000 scrolls of ancient wisdom'}
                    {location.id === 'gardens' && 'Magical healing springs for all creatures'}
                    {location.id === 'academy' && 'Where young bards learned their craft'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: 'rgba(0, 0, 0, 0.8)', padding: '3rem 2rem', textAlign: 'center', borderTop: '2px solid #ff6b35' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3>Connect with the Wildfire</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
              <a href="#" style={{ fontSize: '2rem', color: '#ff6b35', transition: 'all 0.3s ease', textDecoration: 'none' }}>🐦</a>
              <a href="#" style={{ fontSize: '2rem', color: '#ff6b35', transition: 'all 0.3s ease', textDecoration: 'none' }}>📸</a>
              <a href="#" style={{ fontSize: '2rem', color: '#ff6b35', transition: 'all 0.3s ease', textDecoration: 'none' }}>🎵</a>
              <a href="#" style={{ fontSize: '2rem', color: '#ff6b35', transition: 'all 0.3s ease', textDecoration: 'none' }}>📖</a>
            </div>
          </div>
          <div>
            <h3>Our Partners</h3>
            <p>Council of Mages • Heroes Guild • Bards Alliance</p>
          </div>
          <div>
            <h3>Impact Stories</h3>
            <p>Read letters from Elloria's people and see how your donations make a difference.</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #ff6b35' }}>
          <p>&copy; 2025 Wildfire Veil Charity Concert • All donations enchanted for transparency by the Council of Mages</p>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.7)' }}>🔥 Together, we reignite hope for Elloria 🔥</p>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div dangerouslySetInnerHTML={{ __html: modalContent }}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App