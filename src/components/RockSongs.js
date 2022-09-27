import React from "react"
import SongList from './SongList'

function RockSongs ({songs}) {
   
    return (
        <div className="rock-list">
            <h2 className="rock-list-header">Rock List</h2>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>  
                        <th className="rock-song-row__item">Song</th>
                        <th className="rock-song-row__item">Artist</th>
                        <th className="rock-song-row__item">Genre</th>
                        <th className="rock-song-row__item">Rating</th>
                    </tr>
                </thead>
            </table>
            <SongList songs = {songs} />
        </div>    
    );
}

export default RockSongs