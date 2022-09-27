import React from "react"
import SongList from './SongList'

function ClassicSongs ({songs}) {
    return (
        <div className="classic-list">
            <h2 className="classic-list-header">Classic List</h2>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>  
                        <th className="classic-song-row__item">Song</th>
                        <th className="classic-song-row__item">Artist</th>
                        <th className="classic-song-row__item">Genre</th>
                        <th className="classic-song-row__item">Rating</th>
                    </tr>
                </thead>
            </table>
            <SongList songs = {songs} />
        </div>    
    );
}

export default ClassicSongs