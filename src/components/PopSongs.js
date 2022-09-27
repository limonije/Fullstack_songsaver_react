import React from "react"
import SongList from './SongList'

function PopSongs ({songs}) {
   
    return (
        <div className="pop-list">
            <h2 className="pop-list-header">Pop List</h2>
            <table style={{width: "100%"}}>
                <thead>
                    <tr>  
                        <th className="pop-song-row__item">Song</th>
                        <th className="pop-song-row__item">Artist</th>
                        <th className="pop-song-row__item">Genre</th>
                        <th className="pop-song-row__item">Rating</th>
                    </tr>
                </thead>
            </table>
            <SongList songs = {songs} />
        </div>    
    );
}

export default PopSongs