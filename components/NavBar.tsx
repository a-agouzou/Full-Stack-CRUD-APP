"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();
  const isCollectionRoute = pathname.startsWith("/collections/");

  return (
    <div className="flex justify-between items-center bg-slate-800 px-5 py-4 rounded-sm text-white">
      <Link href="/" className="font-bold">
        Watchlst.
      </Link>
      <Link href="/createCollection" className="text-sm border py-2 px-3 font-semibold rounded-sm">
        New Collection
        </Link>
    </div>
  );
};

export default NavBar;
