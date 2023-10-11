'use client';
import { useSession } from 'next-auth/react';
import MenuAppBar from '../ui/nav-bar';

function MainNavigation() {
  const { data: session, status } = useSession();

  console.log(session);

  return <MenuAppBar />;
}

export default MainNavigation;
