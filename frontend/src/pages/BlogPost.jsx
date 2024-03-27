// FullBlogPost.js
import React from 'react';

function FullBlogPost({ post }) {
  const { title, author, date, content, comments } = post;

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-2">By {author} on {date}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
      {comments && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} className="mb-4">
                <p className="text-gray-600 mb-2">By {comment.author} on {comment.date}</p>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FullBlogPost;
