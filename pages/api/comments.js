// import {GraphQLClient, gql } from 'graphql-request';


// const graph = new GraphQLClient(
//   'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cll1kh2jc2fun01uj1klqdmuj/master'
// );



// export default async function comments(req, res) {

   
//     const graphQLClient = new GraphQLClient(graph, {
//       headers: {
//         authorization: `Bearer ${"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTI3NTA2OTgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsbDFraDJqYzJmdW4wMXVqMWtscWRtdWovbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImI1MGY2MDEyLTc4ZWQtNDQyNi1iODRmLWRjODBhZTdmNDlkOCIsImp0aSI6ImNsbG4wMjZmazIwMXQwMXQ3aDVwN2Q0cWkifQ.Ahn1GHXmlX83heRFRJQv1SMizp6E6rhXRcjjNddsj7CxjSSKwD6mqMl7MacOEiH8NmCOok0hdUBsnxHMdUsp15Lnz3ZDsbB_5Sk0befa0Z9n51iW1xdZkAxaFVnEEe5hZ7TbB0FDnmFELqEtIB7mm9OjtiwggLE73P76O8IeaMxf5GzIWdswf0eHuNOvn6SNjHJm01T2QQRD6b6C7crv0ZoUaJ6yH0F8hXAil-19JyuvI943Rhz7yip6t4IPZGCWSDQOP-3bdu04TqJWi6RqDVp0Rcco9RxNqB28ZL2zTCIWaUt_Bxo0rsluncY1HqrJoV6EYFHhvT6kDz23c3kVKcclnUGyj_6MU8BtKfp6JRJklgczX_Ot7ouLFbp0c0AWZAYgJeOTaiJ78Hhv84EJ2VGQC6IvboKXSXma86V9axRQGMYN0duIr1AuRMa07lGU-TM3qmvXBW37dfoUvzBXZhFXPcBPBD1nIdN_HdpOwZ73koD1KLS1gpmvFQN3fGj5A1mPIYjFICSfGD6hItSNJhyJqo13UEoiqXZZUFyXXF0QHpCEN_KCydBJmtIeeUguJWlXFfHzEYXtl8yoPSJZoiKv9ejVrLjS46IxMq9apxbRIY6lSPymmdJjgvg-NUOn9Px1xn6dHSTXXmwPa8HqJDvLzsx7wiFch9enrpO8F5w"}`
//       }
//     })

//     const query = gql`
//     mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
//       createComment(data: {
//         name: $name,
//         email: $email,
//         comment: $comment,
//         post: { connect: { slug: $slug } }
//       }) {
//         id
//       }
//     }
//     `
//     try {
//       const res=ult = await graphQLClient.request(query, req.body);
//       console.log('Response:', result); // Log the response
//       return res.status(200).send(result);
//     } catch (error) {
//       console.error('Error:', error); // Log the error
//       return res.status(500).send(error);
//     }
    
//   }
