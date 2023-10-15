import { LOGIN_USER } from '@/helpers/gql.request';
import { useMutation } from '@apollo/client';

export interface CreateUserInput {
  loginUserInput: {
    email: string;
    password: string;
  };
}

interface Token {
  access_token: string;
}

export const useLogin = (loginInput: CreateUserInput) => {
  return useMutation<Token, CreateUserInput>(LOGIN_USER, {
    variables: loginInput,
  });
};
