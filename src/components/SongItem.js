import React from "react"

function SongItem({song}) {
    return (
        <tr className="song-item-row">
            <td className="song-item">
            {song.title}
            </td>
            <td className="song-item">
            {song.artist}
            </td>
            <td className="song-item">
            {song.genre}
            </td>
            <td className="song-item">
            {song.rating}
            </td>
        </tr>       
    )
}

export default SongItem