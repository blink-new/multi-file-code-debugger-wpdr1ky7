import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Redirect to the main HTML page
    window.location.href = '/index.html'
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b3d 50%, #1a0f2e 100%)',
      color: '#ff6b35',
      fontFamily: 'Georgia, serif',
      fontSize: '1.5rem'
    }}>
      🔥 Loading Wildfire Veil...
    </div>
  )
}

export default App