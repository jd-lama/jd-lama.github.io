import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
     
    }
  }
`;

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
     
      client {
        id
        name
        email
        phone
      }
    }
  }
`;

export { GET_PROJECTS, GET_PROJECT };
