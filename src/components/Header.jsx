import { Link, useLocation } from 'react-router-dom';
import './css/Header.css';

function Header() {
    const location = useLocation();
    
    return (
        <header className="header-block">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/">
                        <span className="logo-accent">Sound</span>LoadMate
                    </Link>
                </div>
                <nav className="header-nav">
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
