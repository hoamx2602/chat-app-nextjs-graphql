import { REGISTER_USER } from '@/helpers/gql.request';
import { useMutation } from '@apollo/client';

export interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

interface NewUser {
  _id: string;
}

export const useRegister = () => {
  return useMutation<NewUser, CreateUserInput>(REGISTER_USER);
};
