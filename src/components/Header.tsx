"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './css/Header.css';

function Header() {
    const pathname = usePathname();

    return (
        <header className="header-block">
            <div className="block sm:flex header-container">
                <div className="header-logo">
                    <Link href="/">
                        <span className="logo-accent">Sound</span>LoadMate
                    </Link>
                </div>
                <nav className="header-nav">
                    <Link
                        href="/"
                        className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
