import React from 'react'

class FilterGenre extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({
            value: "", 
        });
    }    
    
    render() {
        return (
            <form className="filter-form" onSubmit={this.handleSubmit}>
                <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                        <option value="">-- Your Favorite Genre --</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Classic">Classic</option>
                </select>
                <input type="submit" value="Submit" />
                </form>
        );
    }
}

export default FilterGenre
