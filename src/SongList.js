import React from "react"
import SongItem from "./SongItem"

class SongList extends React.Component {
   
    render() {
        const songItems = this.props.songs.map((song) => 
            <SongItem key={song.id} song={song}/>
        )

        return (
            <table style={{width: "100%"}}>
             <tbody>
                {songItems}
             </tbody>
            </table>
        )
    }

}

export default SongList