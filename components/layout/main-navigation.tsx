"use client";

import { useSession } from "next-auth/react";
import MenuAppBar from "../ui/nav-bar";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

function MainNavigation() {
  const pathname = usePathname();

  const { data: session, status } = useSession();

  console.log(session);

  if (pathname === "/auth/login" || pathname === "/auth/signup") {
    return;
  }

  return (
    <Fragment>
      <MenuAppBar />
    </Fragment>
  );
}

export default MainNavigation;
