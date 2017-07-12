import React from 'react';

const Post = ({ title, score, link }) => {
  return (
    <main>
      <div>Title: { title }</div>
      <div>Score: { score }</div>
      <a href={`https://www.reddit.com${ link }`}>Link</a>
    </main>
  );
};

export default Post;
