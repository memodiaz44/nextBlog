import { useState } from "react";
import { AddComment } from "./comments";
import { Comment } from "./Comment";

export function CreatedComment ({post}){
    const [comments, setComments] = useState([]);

    const addComment = (comment) => {
        setComments([...comments, comment]);
    };

    return (
        <>
         <AddComment post={post} onSubmit={addComment} />
        <div>
            {comments.map((comment, index) => ( 
                <Comment 
                key={index} 
                text={comment}
                />
            ))}
        </div>
        </>
    )
    

}


