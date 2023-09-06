import React, { useState } from 'react';

export function Search({ posts, onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);


    if (posts) {
      if (!value) {
        onSearch(posts);
      } else {
        const filteredPosts = posts.filter(
          (post) =>
            post.slug.toLowerCase().includes(value.toLowerCase()) ||
            post.title.toLowerCase().includes(value.toLowerCase())
        );
        onSearch(filteredPosts);
      }
    }
  };
  return (
    <div className="flex items-center">
      <form className="flex space-x-1">
        <input
          type="text"
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
      </form>
 
    </div>
  );
}
