"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './css/Header.css';


interface NavItem {
    label: string;
    href: string;
}

interface HeaderProps {
    items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
    {label: "Home", href:"/"},
    {label: "About", href:"/about"}
]
 


function Header({ items = defaultNavItems }: HeaderProps) {
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
                    {/* Sử dụng map để lặp qua mảng items và render ra các thẻ Link */}
                    {items.map((item) => (
                        <Link
                            key={item.href} // React yêu cầu prop 'key' khi render list
                            href={item.href}
                            className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
