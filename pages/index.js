import { useState } from 'react';
import {GraphQLClient, gql } from 'graphql-request';
import BlogPosts from '../components/BlogCard';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css'
import { Paginate } from '../components/Pagination';
import 'bootstrap/dist/css/bootstrap.css'
import { paginate } from '../components/paginate';
import Footer from '../components/Footer';


import dotenv from 'dotenv';
dotenv.config();



const graph = new GraphQLClient(process.env.MYAPI);


export const query2 = gql`
 {
  categories {
    name
    slug
    posts {
      id
      slug
    }
  }
}
`;

const query = gql`
{
  posts(first: 20) {
    createdAt
    publishedAt
    slug
    coverPic {
      id
      url
      fileName
    }
    title
    author {
      id
      name
    }
  }
}
`;


export async function getStaticProps(){
  const { posts } = await graph.request(query);
  const { categories } = await graph.request(query2);

  return {
    props: {
      posts,
      categories
  },
    revalidate: 10, 
  };
}


export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const variables = { slug };

  try {
    const result = await request(graph, query, variables);
    return result.comments;
  } catch (error) {
    console.error('GraphQL Error:', error.response?.errors);
    return [];
  }
};






export default function Home({posts, categories}) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2


  const [filteredPosts, setFilteredPosts] = useState(posts);


  const handleSearch = (filtered) => {
    setFilteredPosts(filtered);
    setCurrentPage(1); 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }


const paginatePost = paginate(filteredPosts, currentPage, pageSize)

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  

  return (
    <>
    <div>
    <Layout categories={categories} posts={posts} onSearch={handleSearch}>
      <div className=" ">
      <main className='flex flex-col justify-center items-center '>
      {paginatePost.length === 0 ? (
    <h1 className='mt-20 pb-20  text-gray-500 mb-10'>No matching results</h1>
  ) : (
          paginatePost?.map((post) => (
            <BlogPosts
              coverPic={post.coverPic}
              createdAt={post.createdAt}
              publishedAt={post.publishedAt}
              title={post.title}
              slug={post.slug}
              author={post.author}
              key={post.id}
            />
          ))
  )}

<Paginate 
 posts={posts.length}
 currentPage={currentPage}
 pageSize={pageSize}
 onPageChange={handlePageChange}
 />  
        </main>
      </div>
   
    </Layout>
    </div>
    <footer>
    <Footer/>
    </footer>
    </>
  );
}

