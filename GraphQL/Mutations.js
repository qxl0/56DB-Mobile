import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($password: String!, $username: String!) {
    login(password: $password, usernameOrEmail: $username) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;


export const LOGOUT = gql`
  mutation logout {
    logout
  } 
`;

export const REGISTER = gql`
  mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
`;