import { useEffect, useState } from "react";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
};

export function Comment({ post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(post.comments)

  }, [post.comments])



  const toUpper = (word) => {
    const words = word.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")

  }

  return (
<>
  {comments.length > 0 && (
    <div>
      {comments.map((comment) => (
        <div
          key={comment.createdAt}
          className={`bg-slate-200 border-b shadow-lg rounded-lg border-gray-100 mb-2 ml-4 mr-4 `}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-black ">{toUpper(comment.name)}</h3>
            <p className="text-gray-500 px-4">{formatDate(comment.createdAt)}</p>
          </div>
          <p className="text-gray-900 dark:text-gray-800">{comment.comment}</p>
        </div>
      ))}
    </div>
  )}
</>


 
  );
}
