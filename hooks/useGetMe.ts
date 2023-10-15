import { GET_ME } from '@/helpers/gql.request';
import { useQuery } from '@apollo/client';

const useGetMe = () => {
  return useQuery(GET_ME, { errorPolicy: 'all' });
};

export default useGetMe;
