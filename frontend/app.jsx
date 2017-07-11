import React from 'react';

import PostIndex from './post_index';
import CommentIndex from './comment_index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "", posts: {}, comments: {} };
  }

  handleChange(e) {
    this.setState({ user: e.currentTarget.value });
  }

  render() {
    return (
      <main>
        <label>
          Username: <input onChange={ this.handleChange.bind(this) }></input>
        </label>
        <button>Search</button>
        <PostIndex posts={ this.state.posts }/>
        <CommentIndex comments={ this.state.comments }/>
      </main>
    );
  }
}

export default App;
