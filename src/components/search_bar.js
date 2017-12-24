import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    //  This is the only place to initiate the state = object
    // All the other place will use this.setState({ term: 'new value' })
    this.state = {
      term: "change me!!"
    };
    // Note: We have to bind(this) whenever this function is using `this` inside it and passed to the children
    // Inline function does NOT need to bind(this)
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Note: name convention, on/handle + element + aciton
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    /** This will call React.createElement() */
    // Inline fat arrow function, in this way, we dont need the onInputChange()
    // Inline function does need to bind(this), this is passed to it automaticlly
    // <input onChange={event => this.setState({ term: event.target.value })} />
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
};

export default SearchBar;
