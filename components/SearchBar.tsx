'use client';

import {useState} from 'react';

type SearchBarProps = {
    onSearch: (query: string) => void;
    disabled?: boolean;
};

export default function SearchBar({onSearch, disabled = false}:SearchBarProps){
    const [query,setQuery] = useState(''); 

    const handleSearch =() =>{
        if(disabled) return;
        if(!query.trim()) return;
        onSearch(query);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(disabled) return;
        if (e.key ==="Enter"){
            handleSearch();
        }
    }
   
    return(
        <div style ={{
            marginTop: 10,
            marginBottom:10,
            display: 'flex',
            justifyContent:'center',
            }}>
            <input 
                type = "text"
                placeholder = "곡명을 입력하세요"
                value = {query}
                onChange = {(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                style = {{
                    width: 1000, 
                    padding: 8, 
                    marginLeft: 100,
                    marginRight: 8,
                    borderRadius:10,
                    border:'1px solid #E5E7EB'

                    }}/>
            
            <button onClick = {handleSearch} disabled={disabled} style={{fontSize:"2em", marginLeft:10}}>
                {disabled?'⏳검색중...' : '🔍'}
            </button>
        </div>
    )
}