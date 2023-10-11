'use client';
import { useSession } from 'next-auth/react';
import MenuAppBar from '../ui/nav-bar';

function MainNavigation() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <MenuAppBar />
    // <nav>
    //   <div
    //     className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
    //     data-te-navbar-ref
    //   >
    //     <div className="flex w-full flex-wrap items-center justify-between px-3">
    //       <div>
    //         <a
    //           className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
    //           href="#"
    //         >
    //           <Image
    //             className="mr-2 h-5"
    //             src={logoPicture}
    //             alt="TE Logo"
    //             loading="lazy"
    //             width={0}
    //             height={20}
    //           />
    //         </a>
    //       </div>

    //       {/* Hamburger button for mobile view */}
    //       <button
    //         className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
    //         type="button"
    //         data-te-collapse-init
    //         data-te-target="#navbarSupportedContent4"
    //         aria-controls="navbarSupportedContent4"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         {/* Hamburger icon */}
    //         <span className="[&>svg]:w-7">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="h-7 w-7"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </button>

    //       {/* Collapsible navbar container */}
    //       <div
    //         className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
    //         id="navbarSupportedContent4"
    //         data-te-collapse-item
    //       >
    //         {/* Left links */}
    //         <ul
    //           className="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
    //           data-te-navbar-nav-ref
    //         >
    //           {/* Home link */}
    //           <li
    //             className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
    //             data-te-nav-item-ref
    //           >
    //             <a
    //               className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
    //               aria-current="page"
    //               href="#"
    //               data-te-nav-link-ref
    //             >
    //               Dashboard
    //             </a>
    //           </li>
    //         </ul>

    //         <div className="flex items-center">
    //           {!session && status !== 'loading' && <LoginLink />}
    //           {session && <SignUpLink />}
    //           <button
    //             id="dropdownUserAvatarButton"
    //             data-dropdown-toggle="dropdownAvatar"
    //             className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //             type="button"
    //           >
    //             <span className="sr-only">Open user menu</span>
    //             <Image
    //               className="w-8 h-8 rounded-full"
    //               src="/docs/images/people/profile-picture-3.jpg"
    //               alt="user photo"
    //               width={0}
    //               height={32}
    //             />
    //           </button>

    //           <div
    //             id="dropdownAvatar"
    //             className="z-10 bg-white divide-y absolute -translate-x-7 translate-y-40 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    //           >
    //             <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
    //               <div>Bonnie Green</div>
    //               <div className="font-medium truncate">name@flowbite.com</div>
    //             </div>
    //             <ul
    //               className="py-2 text-sm text-gray-700 dark:text-gray-200"
    //               aria-labelledby="dropdownUserAvatarButton"
    //             >
    //               <li>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                 >
    //                   Dashboard
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                 >
    //                   Settings
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href="#"
    //                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //                 >
    //                   Earnings
    //                 </a>
    //               </li>
    //             </ul>
    //             <div className="py-2">
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //               >
    //                 Sign out
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default MainNavigation;
