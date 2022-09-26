import React from "react"
import SongItem from "./SongItem"

class RockSongList extends React.Component {
   
    render() {
            const rockSongItems = this.props.songs.filter(song => song.genre === 'Rock').map((song) => 
            <SongItem key={song.id} song={song}/>
            )
            
        return (
            <table style={{width: "100%"}}>
             <tbody>
                {rockSongItems}
             </tbody>
            </table>
        )
    }

}

export default RockSongList