import SearchBar from "./SearchBar";

type HeaderPropos={
    onSearch: (query:string) =>void;
    isLoading:boolean;
    onReset: ()=>void;
}

export default function Header({onSearch,onReset,isLoading}:HeaderPropos){
    return(
        <header 
        style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 24,
      }}>
        <div style={{
          display:'flex',
          alignItems:'center',
          gap: 20,
        }}>
            <img 
            src="logo.png"
            alt="MuSicFinder logo"
            onClick={onReset}
            style={{
                height:48,
                transform:'scale(4.0)',
                cursor:'pointer',
            }}
            />
        </div>
        <SearchBar onSearch={onSearch} disabled={isLoading}/>
      </header>
    )
}