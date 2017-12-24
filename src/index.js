import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyBYdheHEU2RKmj1bYWADz-8DMuQHOYttkQ';

// Create a new component. This component should produce some HTML

// This is the ES5 way to define a function
// const App = function() {
//   return <div>Hi!</div>;
// };
// This is the ES6 fat arrow to define a function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      videoSearch: "surfboards",
    };

    this.videoSearch = this.videoSearch.bind(this);
    this.updateteSelectedVideo = this.updateteSelectedVideo.bind(this);
    this.videoSearch('surfboards');
  }

  updateteSelectedVideo(selectedVideo) {
    this.setState({
      selectedVideo,
    });
  }

  videoSearch(term) {
    // TODO: If use YTSearch({ key: API_KEY, term: term }, function(videos) => {} will throw cannot find this exception
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.updateteSelectedVideo}/>
      </div>
    );
  }
}

// Thake this component's generated HTML and put it
// on the page(in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
