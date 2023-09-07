import { useState } from "react";
import React  from "react";
import axios from 'axios'





export function AddComment({post}) {
    const [comment, setComment ] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail]  = useState('')
    const [received, setReceived] = useState(false) 
    const [isLoading, setIsLoading] = useState(false)

   

    let postSlug = post.slug
 

    const addedComment = async (e) => {
      e.preventDefault();
      setIsLoading(true); // Set loading to true when the request starts

  
      try {
        const response = await axios.post(process.env.NEXT_PUBLIC_APP_MYENDPOINT, {
          name: name, // Replace with your name state variable
          email: email, // Replace with your email state variable
          comment: comment, // Replace with your comment state variable
          slug: post.slug,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.status === 200) {
          // Comment saved successfully, you can update your UI or perform any other action here
          console.log('Comment saved successfully');
          setComment('');
          setName('');
          setEmail('');
          setReceived(true);

        } else {
          // Handle error
          console.error('Failed to save comment');
          setComment('');
          setName('');
          setEmail('');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
      }
    };

return(
    <div>
    <form className="mb-8 ml-4 mr-4 bg-gray-50" onSubmit={addedComment}>
      <div className="block p-2 text-sm text-gray-900 border border-gray-200 rounded-lg dark:text-white dark:bg-gray-800 focus:ring focus:ring-opacity-40 focus:outline-none">
        <div className="mb-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="block w-full p-2 text-sm text-gray-900 border border-gray-200 rounded-lg dark:text-white dark:bg-gray-800 focus:ring focus:ring-opacity-40 focus:outline-none"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full p-2 text-sm text-gray-900 border border-gray-200 rounded-lg dark:text-white dark:bg-gray-800 focus:ring focus:ring-opacity-40 focus:outline-none"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="4"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-200 rounded-lg dark:text-white dark:bg-gray-800 focus:ring focus:ring-opacity-40 focus:outline-none"
          placeholder="Write a comment..."
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
  
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {isLoading && !received ? 'Sending comment' : 'Post comment'}
      </button>
      {received ? <h3>Comment under review</h3> : null}
    </form>
  </div>
  
)
}


