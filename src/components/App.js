import React, { Component } from "react"
import SearchBar from "./SearchBar"
import youtube from "../Apis/youtube"
import VideoList from "./VideoList"

class App extends Component {
  state = { videos: [] }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    })

    console.log(response.data.items)
    this.setState({
      videos: response.data.items,
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* My search produced {this.state.videos.length} videos */}
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
