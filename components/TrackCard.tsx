import {useRef,useEffect} from 'react';

type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  image: string;
  previewUrl: string;
  
};

type TrackCardProps = {
  track: Track;
  isPlaying:boolean;
  onPlay: () => void;
  onStop: () => void;
};

export default function TrackCard({ track, isPlaying,onPlay,onStop }: TrackCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const playingStyle = isPlaying?{
    border: '0.3em solid #2563EB',
    background: '#EFF6FF'
  } : {};

  useEffect(()=>{
    if(!isPlaying && audioRef.current){
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  },[isPlaying]);

  return (
    <article
      style={{
        border: '2px solid #e5e7eb',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        background: '#fff',
        ...playingStyle,
        cursor:isPlaying?'default':'pointer',
        transition:'transform 0.15s ease, box-shadow 0.15s ease'
      }}
      onMouseEnter={(e) =>{
        if(isPlaying) return;
        e.currentTarget.style.border = '0.3em solid #3b82f6';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(59,130,246,0.15)';
      }}
      onMouseLeave={(e) =>{
        if(isPlaying) return;
        e.currentTarget.style.border = '1px solid #e5e7eb';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
         style={{
        display: 'flex',
        gap: 12,
        padding: 12,
        borderRadius: 8,
        
      }}
    >
      <img
        src={track.image}
        alt={`${track.title} album cover`}
        style={{
        width: 100,
        height: 100,

        objectFit: 'cover',
        flexShrink: 0,
        }}
/>

    <div style={{flex:1}}>
      <header style={{ marginBottom: 8 }}>
        <h3 style={{ margin: 0, fontSize: 16, color:'black'}}><b>{track.title}</b></h3>
        <p style={{ margin: '4px 0 0 0', color: '#4b5563' }}>👤 {track.artist}</p>
      </header>

      <div style={{ color: '#6b7280', fontSize: 14 }}>
        <div>💿 {track.album}</div>
        <div style={{color:'#3730a3'}}>📅 {track.year}</div>
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick ={()=>{
          if(!audioRef.current) return;

          if (isPlaying){
            audioRef.current.pause();
            onStop();
          } else{
            audioRef.current.play();
            onPlay();
          }
          
        }} 
        style={{ padding: '6px 10px' ,
                 color: isPlaying?'gray':'#2D8400',
                 fontWeight: isPlaying ? 'bold':'normal' }}>
          {isPlaying ? '🎧재생중...':'▶ 미리듣기'}
        </button>
        <audio ref={audioRef} src={track.previewUrl}/>
        </div>
      </div>
    </div>
    </article>
  );
}
