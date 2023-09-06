import Link from "next/link"; // Import the Link component
import { formatDate } from "./Comment";


export default function BlogPosts
({
    coverPic,
    publishedAt,
    title,
    slug,
    author
}){    
    return (
        <div className="text-decoration-none " 
       >
            <Link href={'/posts/'  + slug}>
                    <div
                     className='lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8 no-underline'
                     style={{
                        color: "black", /* Set text color to red */
                        textDecoration: "none !important" /* Use !important to override Bootstrap */
                      
                      }}
                   >
             {coverPic && coverPic.url && (
  <img
    src={coverPic.url}
    alt=""
    style={{
      width: '200px',
      height: '200px',
      margin: '50px'
    }}
  />
)}

                    <div className="my-4"  >
                <h2 className="font-medium text-gray-600 text-lg my-2 uppercase no-underline">{title}</h2>
                <div className="no-underline-link">
                   {slug} 
                </div>
                <h6>
                    Created By  
                    <div>  {author.name} </div>
              
                </h6>
                <div>
                    {formatDate(publishedAt)}
                </div>
                </div>
                </div>
            </Link>
          
        </div>
    )
}
