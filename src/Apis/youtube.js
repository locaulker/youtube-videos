import axios from "axios"

const KEY = "AIzaSyAbMUaXAWQNft49L84PDJKTnkur3Gq1hGA"
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
    // key: KEY,
  },
})
