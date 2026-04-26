import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

      <div style={{ width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '6px' }}>이메일</div>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="이메일 입력"
            style={{
              width: '100%', background: '#1a1a1a', border: '0.5px solid #444',
              borderRadius: '6px', padding: '12px 14px', color: '#fff',
              fontSize: '13px', outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '6px' }}>비밀번호</div>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            type="password"
            style={{
              width: '100%', background: '#1a1a1a', border: '0.5px solid #444',
              borderRadius: '6px', padding: '12px 14px', color: '#fff',
              fontSize: '13px', outline: 'none', boxSizing: 'border-box'
            }}
          />
        </div>

        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%', background: '#1DB954', border: 'none',
            borderRadius: '30px', padding: '13px', color: '#000',
            fontSize: '14px', fontWeight: '500', cursor: 'pointer', marginTop: '4px'
          }}>
          계속
        </button>

        <div style={{ textAlign: 'center', color: '#aaa', fontSize: '12px', margin: '4px 0' }}>또는</div>

        <button style={{
          width: '100%', background: 'none', border: '0.5px solid #555',
          borderRadius: '30px', padding: '12px', color: '#fff',
          fontSize: '13px', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center', gap: '10px'
        }}>
          <span style={{ fontWeight: '700', color: '#4285F4' }}>G</span>
          Google로 계속하기
        </button>

        <div style={{ textAlign: 'center', fontSize: '12px', color: '#aaa', marginTop: '8px' }}>
          계정이 없으신가요?{' '}
          <span style={{ color: '#1DB954', cursor: 'pointer' }}>회원가입</span>
        </div>
      </div>
    </div>
  )
}

export default Login