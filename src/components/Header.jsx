import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
    return (
        <div className="header-block">
            <div className="header-left">Logo</div>
            <div className="header-right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Header;
