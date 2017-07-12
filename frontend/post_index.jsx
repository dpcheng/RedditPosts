import React from 'react';

import Post from './post';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPosts() {
    const posts = this.props.posts;

    return Object.keys(posts).map(id => {
      let post = posts[id].data;
      return <Post
        key={ id }
        title={ post.title }
        score={ post.score }
        link={ post.permalink }
      />;
  });
  }

  render() {
    return (
      <main>
        Posts:
        { this.renderPosts.bind(this)() }
      </main>
    );
  }
}

export default PostIndex;
