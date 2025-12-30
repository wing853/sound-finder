'use client';

import SearchStatusView from '@/components/SearchStatusView';
import Header from '@/components/Header';
import {useSearchState} from '@/hooks/useSearchState' 


export default function Home(){
    const {status, query, tracks, startSearch,reset} = useSearchState()
    const isLoading = status === 'loading';

    return(
    <main style={{padding:24}}>
      <div style={{paddingLeft:56}}><Header onSearch={startSearch} isLoading={isLoading}
      onReset={reset}
      />
      </div>
      
      <SearchStatusView
    status={status}
    query={query}
    tracks={tracks}
  />
    </main>

  )
  
};
  
