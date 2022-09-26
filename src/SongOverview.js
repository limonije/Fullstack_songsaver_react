import React from 'react'
import SongList from './SongList'
import SongForm from './SongForm'
import Delete from './Delete'

class SongOverview extends React.Component {

    constructor() {
      super()
      this.state = 
      {
        songs: []
      }
      this.emptySongList = this.emptySongList.bind(this)
    }
  
    addSong = (song) => {
        console.log(song)
        let title = song.title
        let artist = song.artist
        let genre = song.genre
        let rating = song.rating
            this.setState((prevState) => {
            const newSongList = [...prevState.songs]
            console.log("This is copie:", newSongList )
            newSongList.push({id: newSongList.length + 1, title: `${title}`, artist: `${artist}`, genre: `${genre}`, rating: `${rating}`})
            newSongList.sort((a, b) => (a.title > b.title) ? 1 : -1)
            const newState = {...prevState , songs: newSongList}
            return newState;
        })
    }
  
    emptySongList() {
        console.log("Het werkt!")
        this.setState({songs: []});
    } 

    render() {
      return (
        <div>
                
                <SongForm addSong={this.addSong}/>
                        <table style={{width: "100%"}}>
                          <thead>  
                            <tr className="song-header">  
                                  <th className="song-row__item">Song (A-Z)</th>
                                  <th className="song-row__item">Artist</th>
                                  <th className="song-row__item">Genre</th>
                                  <th className="song-row__item">Rating</th>
                            </tr>
                         </thead>
                        </table>
                <SongList songs={this.state.songs}/>
                <Delete clickButton={this.emptySongList}/>
        </div>
      );
    }
  }
  
  export default SongOverview;