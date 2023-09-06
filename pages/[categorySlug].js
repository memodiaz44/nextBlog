import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { GraphQLClient, gql } from 'graphql-request';
import BlogPosts from '../components/BlogCard';
import Footer from '../components/Footer';
import { Paginate } from '../components/Pagination';
import { useState } from 'react';

import dotenv from 'dotenv';
dotenv.config();

const graph = new GraphQLClient(process.env.MYAPI);

const query = gql`
  query GetCategoryPosts($categorySlug: String!) {
    category(where: { slug: $categorySlug }) {
      name
      posts {
        id
        title
        slug
        createdAt
        publishedAt
        coverPic {
          id
          url
          fileName
        }
        author {
          id
          name
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const { categorySlug } = params;
  const { category } = await graph.request(query, { categorySlug });

  return {
    props: {
      category,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const queryCategories = gql`
    {
      categories {
        slug
        posts(first: 20){
          title
        }
      }
    }
  `;

  const { categories } = await graph.request(queryCategories);

  const paths = categories.map((category) => ({
    params: { categorySlug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function CategoryPage({ category }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [filteredPosts, setFilteredPosts] = useState(category.posts);

  const handleSearch = (filtered) => {
    setFilteredPosts(filtered);
  };

  return (
    <>
      <Layout posts={category.posts} onSearch={handleSearch}>
        <div className="mt-20">
          <h1>{category.name} topics</h1>
          <main className="flex flex-col justify-center items-center pb-30">
            {filteredPosts.length === 0 ? (
                <h1 className='mt-20 pb-20  text-gray-500 mb-10'>No matching results</h1>
                ) : (
                  filteredPosts.map((post) => (
              <BlogPosts
                key={post.id}
                coverPic={post.coverPic}
                createdAt={post.createdAt}
                publishedAt={post.publishedAt}
                title={post.title}
                slug={post.slug}
                author={post.author}
              />
              ))
  )}
          </main>
        </div>
      </Layout>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
