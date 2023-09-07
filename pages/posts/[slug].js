import {GraphQLClient, gql } from 'graphql-request';
import Layout from '../../components/Layout';
import { CreatedComment } from '../../components/createdComment'; // Make sure to import the correct component
import { Comment } from '../../components/Comment';
import Footer from '../../components/Footer'
import { Sidebar } from '../../components/Sidebar';
import { formatDate } from '../../components/Comment';
import 'tailwindcss/tailwind.css'


import dotenv from 'dotenv';
dotenv.config();

const graph = new GraphQLClient(process.env.MYAPI);

const query = gql`

query Post($slug: String!){
    post(where: {slug: $slug}){
        id, 
        title,
        slug,
        publishedAt,
        author{
            id,
            name,
            avatar{
                url
            }
        }
        content{
            html
        }
        coverPic{
            id,
            url
        }
        comments {
            comment
            name
            createdAt
        }
        author {
          name
          avatar{
            id
          }
        }
    
    }
}
`;

const SLUGLIST = gql`
{
    posts(first: 20){
        slug
        content{
            html
        }
    }
}
`;

export async function getStaticPaths(){
    const { posts } = await graph.request(SLUGLIST);
    return {
        paths: posts.map((post) => ({params: {slug: post.slug} })),
        fallback: false,
    };
}

export async function getStaticProps({params}){
  const slug = params.slug;  
  const data = await graph.request(query, {slug});
  const post = data.post 
  return {
    props: {
      post
    },
    revalidate: 10, 
  };
}

export default function BlogPost({post, categories}){
    return(
        <>
        <Layout > 
        <main className="flex overflow-scroll   h-screen pt-10 pb-30 mb-10">
          <div className="m-1 ">
          {post.coverPic && post.coverPic.url && (
  <img
    src={post.coverPic.url}
    alt=""
    style={{
      width: '60%',
      height: '400px',
      margin: '20px'
    }}
  />
)}
            <div>
              <h1>{post.title}</h1>
            </div>
            <div className=" font-sans max-h-[70vh] mb-20 z-10" dangerouslySetInnerHTML={{ __html: post.content.html, }} />
          
          </div>
          

          
          <div className='m-5 ml-1 '>
          <Sidebar categories={categories} />
          </div>
          
        </main>
       
        <div className="flex col space-x-2.5 ml-20 pl-10 italic">
          <img 
          src={post.author.avatar.url} 
          alt=''
          style={{
            width: '40px',
            borderRadius: '50%'
          }} />
        <h3>Created by {post.author.name}</h3>
        <p className='pl-0 text-sm'>At {formatDate(post.publishedAt)}</p>
      </div>
      <h2 className='ml-10 pl-10 '>Leave a comment</h2>
<div className=''>
        <CreatedComment post={post}/>
        </div>
        {post.comments && post.comments.length > 0 ? (
       
        <>
          <h2 className='ml-10'>Comments</h2>
          <Comment post={post} />
        </>
      ) : ( 
        <h2 className='ml-10'>(0) Comments</h2>
    )}

  
        </Layout>
         <footer>
         <Footer/>
         </footer>
         </>

    );
}
