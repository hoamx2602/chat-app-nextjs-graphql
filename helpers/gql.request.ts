import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($loginUserInput: LoginUserInput!) {
    loginUser(loginUserInput: $loginUserInput) {
      access_token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Register($createUserInput: CreateUserInput!) {
    register(createUserInput: $createUserInput) {
      _id
      username
      created_at
      email
    }
  }
`;
