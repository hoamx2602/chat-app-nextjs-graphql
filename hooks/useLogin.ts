import { LOGIN_USER } from '@/helpers/gql.request';
import { useMutation } from '@apollo/client';

export interface LoginUserInput {
  loginUserInput: {
    email: string;
    password: string;
  };
}

interface Token {
  access_token: string;
}
export const useLogin = () => {
  return useMutation<Token, LoginUserInput>(LOGIN_USER);
};
