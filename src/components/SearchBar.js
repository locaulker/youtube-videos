import React, { Component } from "react"

export class SearchBar extends Component {
  state = { term: "" }

  onInputChange = event => {
    this.setState({
      term: event.target.value,
    })
  }

  onFormSubmit = event => {
    event.preventDefault()

    // Todo: Add callback from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Enter search term"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
