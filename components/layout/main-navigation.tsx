'use client';

import { useSession } from 'next-auth/react';
import MenuAppBar from '../ui/nav-bar';
import { usePathname } from 'next/navigation';
import { Fragment, PropsWithChildren } from 'react';
import SideBar from './sidebar';
import Navbar from './navbar';

function MainNavigation(props: PropsWithChildren) {
  const pathname = usePathname();

  const { data: session, status } = useSession();

  console.log(session);

  if (
    pathname === '/auth/login' ||
    pathname === '/auth/signup' ||
    pathname === '/auth/reset-password' ||
    pathname === '/auth/forgot-password' ||
    pathname === '/auth/profile-lock'
  ) {
    return;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SideBar />

        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>{props.children}</main>
        </div>
      </div>
    </Fragment>
  );
}

export default MainNavigation;
