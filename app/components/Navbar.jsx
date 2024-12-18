"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/shopiq_logo.svg";
import menu_icon from "../../public/menu.svg";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
    const router = useRouter();
    const [menu, setMenu] = useState(false);

    return (
        <nav className="flex justify-center md:justify-between p-2 items-center w-11/12 m-auto relative">
            <Image
                className="w-[120px] md:w-[150px]"
                src={logo}
                alt="logo"
                onClick={() => router.push("/")}
            />
            <div className="hidden md:flex gap-8">
                <Link className="hover:text-themePrimary" href="/">
                    Home
                </Link>
                <Link className="hover:text-themePrimary" href="/products">
                    Products
                </Link>
                <Link className="hover:text-themePrimary" href="/about">
                    About
                </Link>
                <Link className="hover:text-themePrimary" href="/contact">
                    Contact
                </Link>
            </div>
            <Image
                className="absolute right-1 md:hidden"
                src={menu_icon}
                alt="menu"
                width={30}
                onClick={() => setMenu(!menu)}
            />
            {menu && (
                <div
                    className="w-[150px] right-1 top-11 rounded-md border border-slate-200 shadow-lg md:hidden flex flex-col absolute gap-2 bg-white p-3 z-10"
                    onClick={() => setMenu(false)}
                >
                    <Link className="hover:text-themePrimary" href="/">
                        Home
                    </Link>
                    <Link className="hover:text-themePrimary" href="/products">
                        Products
                    </Link>
                    <Link className="hover:text-themePrimary" href="/about">
                        About
                    </Link>
                    <Link className="hover:text-themePrimary" href="/contact">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
