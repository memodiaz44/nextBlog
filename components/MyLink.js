import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { useRouter } from 'next/router'; // Import the useRouter hook


export function MyDropdown({ categories, mobileMenuOpen }) {
    const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePostClick = (slug) => {
    router.push(`/posts/${slug}`); // Use the router to navigate to [slug].js
  };

  return (
    <div className='bg-blue text-white overflow-visible  ' >
      
      <div className={mobileMenuOpen ?'flex flex-col' : ''}>
      {categories?.map((category) => (
  <div key={category.id} className="relative inline-block text-left  	">
    <Menu>
      <Menu.Button
        onClick={() => handleCategoryClick(category)}
        className="p-2 cursor-pointer overflow-visible  "
      >
        {category.name}
      </Menu.Button>
      {selectedCategory === category && (
        <Menu.Items className="origin-top-right  color-red  right-0 mt-2 w-56 rounded-md shadow-lg bg-blue ring-1 ring-black ring-opacity-5 focus:outline-none absolute overflow-visible z-10 	">
          <div className="py-1 ">
            {category.posts?.map((post) => (
              <Menu.Item
                key={post.id}
                as="a"
                onClick={() => handlePostClick(post.slug)} // Handle the click to navigate
                className=" block px-4 py-2 text-white text-gray-700 no-underline cursor-pointer overflow-visible bg-gray-800	 hover:bg-sky-700   "
              >
                {post.slug}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      )}
    </Menu>
    
  </div>
))}
</div>
    </div>
  );
}
