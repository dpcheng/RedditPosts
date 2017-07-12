import React from 'react';

import PostIndex from './post_index';
import CommentIndex from './comment_index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: "kijafa", posts: {}, comments: {} };
  }

  fetchPosts() {
    fetch(`https://www.reddit.com/user/${ this.state.user }/submitted.json`)
      .then( newPosts => newPosts.json() )
      .then( json => {
        window.posts = json.data.children;
        this.setState({ posts: json.data.children }
      );
    });
  }

  fetchComments() {
    fetch(`https://www.reddit.com/user/${ this.state.user }/comments.json`)
      .then( newComments => newComments.json() )
      .then( json => {
        window.comments = json.data.children;
        this.setState({ comments: json.data.children });
      });
  }

  handleClick() {
    this.fetchPosts();
    this.fetchComments();
  }

  handleChange(e) {
    this.setState({ user: e.currentTarget.value });
  }

  render() {
    return (
      <main>
        <label>
          Username: <input onChange={ this.handleChange.bind(this) } defaultValue={this.state.user}></input>
        </label>
        <button onClick={ this.handleClick.bind(this) }>Search</button>
        <PostIndex posts={ this.state.posts }/>
        <CommentIndex comments={ this.state.comments }/>
      </main>
    );
  }
}

export default App;
