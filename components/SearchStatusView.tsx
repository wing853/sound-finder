import TrackCard from "@/components/TrackCard";
import {useState} from 'react';
import IdleView from "@/components/IdleView";
type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  image: string;
  previewUrl: string;
};

type Props = {
    status: 'idle' | 'loading' | 'success' |'fail';
    query: string;
    tracks: Track[];
};

export default function SearchStatusView({status,query,tracks}:Props){
    const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);  

    if(status === 'idle') return <IdleView></IdleView> ;
    if(status === 'loading') return <p style = {{color:'gray'}}>⏳"{query}" 검색중...</p>;
    if (status === 'success') {
    console.log(tracks);
    return (

      <div>
        {tracks.length > 1 &&(
          <div
           style={{
            marginBottom: 12,
            padding: '8px 12px',
            background: '#eef2ff',
            borderRadius: 8,
            color: '#3730a3',
            fontSize: 14,
          }}>
            🔍<strong style={{fontSize:"2em", color:'#800020'}}>"{query}"</strong>과/와 연관된 곡이 {tracks.length}개 검색되었습니다.
            <br/>
            곡과 아티스트 및 앨범정보를 확인해 주세요. <br/>
            결과는 최신순으로 발매된 {tracks.length}개의 결과입니다.
            </div>
        )}
        <div style={{ marginTop: 12 }}>
            {tracks.map((track) => (
            <TrackCard 
            key={track.id} 
            track={track}
            isPlaying = {playingTrackId===track.id}
            onPlay = {()=>setPlayingTrackId(track.id)}
            onStop={()=>setPlayingTrackId(null)} 
            />
          ))}
        </div>
      </div>
    );
  }
    if(status === 'fail') return (
    <div style={{color:'#A5B4CE'}}>
    <p>"{query}" 검색 결과가 없습니다.</p>
    <p>곡명을 다시 확인해 주세요</p>
    </div>
    );

};