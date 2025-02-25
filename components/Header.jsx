import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="w-full h-[100px] md:mb-[50px] md:mt-[50px] flex items-center justify-start z-1000 bg-transparent">
            <Wrapper className="flex items-center justify-start">
                <div className="flex items-center mr-4 ml-10">
                    <Link href="/">
                        <img
                            src="/logotomohon.png"
                            className="w-[40px] sm:w-[60px] md:w-[60px] lg:w-[100px] max-w-[100px] h-auto"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center mr-4 ml-10">
                    <Link href="/">
                        <img
                            src="/logo.png"
                            className="w-[40px] sm:w-[60px] md:w-[60px] lg:w-[100px] max-w-[100px] h-auto"
                            alt="Logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center mr-1 ml-10">
                <Link href="/">
                    <img
                        src="/logokinilow.png"
                        className="w-[100px] sm:w-[120px] md:w-[120px] lg:w-[160px] max-w-[160px] h-auto" // Increased width values
                        alt="Logo"
                    />
                </Link>
                </div>

                <div className="flex items-center mr-4 ml-10">
                <Link href="/">
                    <img
                        src="/logoposko.png"
                        className="w-[100px] sm:w-[120px] md:w-[120px] lg:w-[160px] max-w-[160px] h-auto" // Increased width values
                        alt="Logo"
                    />
                </Link>
                </div>

                <div className="hidden md:flex ml-5">
                    <Menu />
                </div>

                <div className="md:hidden flex items-center relative z-30">
                    <button onClick={() => setMobileMenu(!mobileMenu)} className="relative z-40">
                        <img
                            src={mobileMenu ? "/x.svg" : "/menu.svg"}
                            alt={mobileMenu ? "Close Menu" : "Menu Icon"}
                            className="w-6 h-6 text-white"
                        />
                    </button>
                    {mobileMenu && (
                        <div className="fixed top-0 right-0 mt-16 mr-4 bg-red-600 bg-opacity-70 z-50 p-4 rounded-lg shadow-lg">
                            <Menu />
                        </div>
                    )}
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;