import React from 'react';

const Comment = ({ body, score, link }) => {
  return (
    <main>
      <div>Body: { body }</div>
      <div>Score: { score }</div>
      <a href={`${ link }`}>Link</a>
    </main>
  );
};

export default Comment;
