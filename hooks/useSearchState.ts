import {useState} from 'react';
import {searchTracks} from '@/lib/api';

export function useSearchState(){
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' |'fail'>('idle');
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState<any[]>([]);

    const startSearch = async(input:string) => {
        
      if (!input.trim()) return;
        
      setQuery(input);
      setStatus('loading');

      try{
        const results = await searchTracks(input);
        const sorted = [...results].sort((a, b) => {
          const yearA = a.year??0;
          const yearB = b.year??0;
          return yearB-yearA
        });                              
        setTracks(sorted);
        setStatus(sorted.length > 0 ?'success':'fail');
      }catch(e){
        setStatus('fail');
      }
    };


    const reset = () =>{
        setStatus('idle');
        setQuery('');
    };

    return {
        status,
        query,
        tracks,
        startSearch,
        reset,
    };
}