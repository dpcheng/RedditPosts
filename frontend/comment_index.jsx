import React from 'react';

import Comment from './comment';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  renderComments() {
    const comments = this.props.comments;

    return Object.keys(comments).map(id => {
      let comment = comments[id].data;
      return <Comment
        key={ id }
        body={ comment.body }
        score={ comment.score }
        link={ comment.link_permalink + comment.id }
      />;
    });
  }

  render() {
    return (
      <main>
        Comments:
        { this.renderComments.bind(this)() }
      </main>
    );
  }
}

export default CommentIndex;
