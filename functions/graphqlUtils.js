// graphqlUtils.js
import { GraphQLClient, gql } from 'graphql-request';

const graph = new GraphQLClient(
    'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cll1kh2jc2fun01uj1klqdmuj/master'
);

export const getCategories = async () => {
  const query = gql`
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

  try {
    const { categories } = await graph.request(query);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
