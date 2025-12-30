export async function searchTracks(query:string){
    const res = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=25`
    );

    const data = await res.json();
    
    return data.results
    .map((item: any) =>({
        id: String(item.trackId),
        title: item.trackName,
        artist: item.artistName,
        album: item.collectionName,
        year: new Date(item.releaseDate).getFullYear(),
        image: item.artworkUrl100,
        previewUrl: item.previewUrl
    }));
}