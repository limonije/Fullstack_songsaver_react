import React from 'react'
import SongList from './components/SongList'
import SongForm from './components/SongForm'
import RockSongs from './components/RockSongs'
import PopSongs from './components/PopSongs'
import ClassicSongs from './components/ClassicSongs'
import Delete from './components/Delete'
import Show from './components/Show'
import FilterGenre from './components/FilterGenre'

class SongOverview extends React.Component {

    constructor() {
      super()
      this.state = 
      {
        songs: [],
        rockSongs: [],
        popSongs: [],
        classicSongs: [],
        savedSongs: []
      }
      this.emptySongList = this.emptySongList.bind(this)
      this.savedSongList = this.savedSongList.bind(this)
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
            const newRockList = [...prevState.rockSongs]
            const newPopList = [...prevState.popSongs]
            const newClassicList = [...prevState.classicSongs]
            const newSavedList = [...prevState.savedSongs]
            
            newSongList.push({id: newSongList.length + 1, title: `${title}`, artist: `${artist}`, genre: `${genre}`, rating: `${rating}`})
            newSongList.sort((a, b) => (a.title > b.title) ? 1 : -1)
            
            if (genre === "Rock") {
              newRockList.push({id: newRockList.length + 1, title: `${title}`, artist: `${artist}`, genre: `${genre}`, rating: `${rating}`}) }
            if (genre === "Pop") {
              newPopList.push({id: newPopList.length + 1, title: `${title}`, artist: `${artist}`, genre: `${genre}`, rating: `${rating}`}) }
            if (genre === "Classic") {
              newClassicList.push({id: newClassicList.length + 1, title: `${title}`, artist: `${artist}`, genre: `${genre}`, rating: `${rating}`}) }
            
            newSavedList.push({id: newSavedList.length + 1, title: `${title}`, artist: `${artist}`, genre: `${genre}`, rating: `${rating}`})
            const newState = {...prevState , songs: newSongList, rockSongs: newRockList, popSongs: newPopList, classicSongs: newClassicList, savedSongs: newSavedList}
            return newState;
        })
    }
  
    emptySongList() {
      this.setState({songs: [], rockSongs: [], popSongs: [], classicSongs: [], savedSongs: []});
    } 

    filterSongList(value) {
      this.setState((prevState) => {
        const filteredSongs = [...prevState.songs]
        const filterSongList = filteredSongs
        const filteredItems = filterSongList.filter((item) => {return item.genre === value})
        const newState = {...prevState , songs: filteredItems}
        return newState;
      })
    }

    savedSongList() {
      this.setState({songs: this.state.savedSongs});
    } 

    render() {
      return (
        <div>
                <SongForm addSong={this.addSong}/>
                <Delete clickButton={this.emptySongList}/>
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
                <Show clickButton={this.savedSongList}/>
                <RockSongs songs={this.state.rockSongs}/>
                <PopSongs songs={this.state.popSongs}/>
                <ClassicSongs songs={this.state.classicSongs}/>
        </div>
      );
    }
  }
  
  export default SongOverview;