import React from 'react'

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            artist: "",
            genre: "", 
            rating: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSong(this.state);
        this.setState({
            title: "", 
            artist: "",
            genre: "", 
            rating: ""
    });
  };

    render() {
        return (
            <form className="song-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.title} 
                    name="title" 
                    placeholder="Song" 
                    onChange={this.handleChange} 
                />
                <input 
                    type="text" 
                    value={this.state.artist}
                    name="artist" 
                    placeholder="Artist" 
                    onChange={this.handleChange} 
                />
                <select
                    value={this.state.genre}
                    onChange={this.handleChange}
                    placeholder="Genre" 
                    name="genre" >
                        <option value="">-- Select Genre --</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Classic">Classic</option>
                </select>
                <select
                    value={this.state.rating}
                    onChange={this.handleChange}
                    name="rating" >
                        <option value="">-- Select Rating --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                </select>
                <button>Add Song</button>
                
              </form>
        );
    }
}

export default SongForm