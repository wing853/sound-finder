export default function IdleVeiw(){
    return(
        <section 
        style={{
        marginTop: 32,
        padding: 24,
        borderRadius: 16,
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        border: '1px solid rgba(255,255,255,0.08)',
        maxWidth: 720,
      }}>
        <h2>🎧이런 기억으로도 검색해보세요</h2>
        <ul
          style={{
          lineHeight: 1.8,
          color: '#d1d5db',
          marginBottom: 20,
        }}>
            <li>💭 같은 음절이 반복되던 곡</li>
            <li>☕ 카페에서 자주나오던 잔잔한 곡</li>
            <li>🎤 남자 보컬, 후렴에서 고음</li>
            <li>📅 2020년대 초반 히트곡</li>
        </ul>
        <div 
          style={{
          padding: 16,
          borderRadius: 12,
          background: 'rgba(59,130,246,0.08)',
          border: '1px solid rgba(59,130,246,0.25)',
        }}>
            <p
            style={{
            margin: 0,
            fontWeight: 600,
            color: '#93c5fd',
          }}>🤔제목을 몰라도 괜찮아요</p>
          <p style={{
             margin: '6px 0 0',
             color: '#e5e7eb',
             fontSize: 14,
          }}>
            🗯️기억나는 단서 하나만 입력해도<br/>
            <b style={{color:"#CA64F4"}}>MusicFinder</b>가 곡을 찾아 드릴게요🎧
          </p>
        </div>
      </section>

    )
}