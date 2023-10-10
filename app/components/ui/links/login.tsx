import Link from "next/link";

function LoginLink() {
  return (
    <Link href="/auth/login">
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none"
      >
        Login
      </button>
    </Link>
  );
}

export default LoginLink;
