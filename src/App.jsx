import logo from './assets/logo.png'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ffffff'
    }}>
      <a href="https://bvelostudio.com/" target="_blank" rel="noreferrer">
        <img
          src={logo}
          alt="Bvelo Studio"
          style={{
            width: '200px',
            cursor: 'pointer'
          }}
        />
      </a>
    </div>
  )
}

export default App