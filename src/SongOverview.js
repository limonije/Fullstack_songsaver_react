import React from 'react'
import SongList from './SongList'
import RockSongList from './SongList'
import SongForm from './SongForm'
import Delete from './Delete'
import FilterGenre from './FilterGenre'

class SongOverview extends React.Component {

    constructor() {
      super()
      this.state = 
      {
        songs: [],
      }
      this.emptySongList = this.emptySongList.bind(this)
      this.filterSongList = this.filterSongList.bind(this)
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

    filterSongList(value) {
      console.log(value)
        
      this.setState((prevState) => {
        const filteredSongs = [...prevState.songs]
        console.log("This is the new array:",filteredSongs)
        const filterSongList = filteredSongs
        const filteredItems = filterSongList.filter((item) => {return item.genre === value})
        const newState = {...prevState , songs: filteredItems}
        return newState;
      })
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
                                  <th className="song-row__item">Genre <FilterGenre onSubmit={this.filterSongList}/></th>
                                  <th className="song-row__item">Rating</th>
                            </tr>
                          </thead>
                        </table>
                <SongList songs={this.state.songs}/>
                <RockSongList songs={this.state.songs}/>
                <Delete clickButton={this.emptySongList}/>
        </div>
      );
    }
  }
  
  export default SongOverview;