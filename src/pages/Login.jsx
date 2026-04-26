function Login() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '100vh', background: '#111', color: '#fff'
    }}>
      <div style={{ fontSize: '13px', color: '#1DB954', letterSpacing: '2px', marginBottom: '12px' }}>
       LISTORA
      </div>
      <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '32px', textAlign: 'center' }}>
        PLAY YOUR SONG
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '300px' }}>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          background: 'none', border: '0.5px solid #555', borderRadius: '30px',
          padding: '12px 20px', color: '#fff', fontSize: '13px', cursor: 'pointer', width: '100%'
        }}>
          <span style={{ fontSize: '16px' }}>G</span>
          Google로 계속하기
        </button>
      </div>

      <div style={{ marginTop: '24px', fontSize: '11px', color: '#aaa' }}>
        계정이 없으신가요? <span style={{ color: '#1DB954', cursor: 'pointer' }}>회원가입</span>
      </div>
    </div>
  )
}

export default Login