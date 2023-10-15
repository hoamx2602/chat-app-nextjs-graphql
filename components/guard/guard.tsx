import useGetMe from '@/hooks/useGetMe';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useReactiveVar } from '@apollo/client';
import authenticatedVar from '../providers/authenticated';
import client from '../providers/apollo-client';

interface GuardProps {
  children: JSX.Element;
  excludedRoutes?: string[];
}

const Guard = ({ children, excludedRoutes }: GuardProps) => {
  const { data: user, refetch } = useGetMe();
  const router = useRouter();
  const authenticated = useReactiveVar(authenticatedVar);

  console.log(authenticated);

  const pathname = usePathname();

  console.log(pathname);

  useEffect(() => {
    if (!excludedRoutes?.includes(pathname)) {
      refetch();
    }
  }, [pathname, refetch, excludedRoutes]);

  useEffect(() => {
    if (!authenticated && !excludedRoutes?.includes(pathname)) {
      router.push('/auth/login');
      client.resetStore();
    }
  }, [authenticated, excludedRoutes, pathname]);

  return (
    <Fragment>
      {excludedRoutes?.includes(pathname) ? children : <>{user && children}</>}
      {/* {children} */}
    </Fragment>
  );
};

export default Guard;
