import React, { useState } from 'react';

const ContentCreator = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new post object
    const newPost = {
      id: posts.length + 1,
      title: title,
      content: content
    };
    // Add the new post to the posts array
    setPosts([...posts, newPost]);
    // Clear the input fields
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} className='com' />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={handleContentChange} className='bot'/>
        </label>
        <br />
        <button type="submit">Post</button>
      </form>

      <hr />
      
      <h2>Recent Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentCreator;
