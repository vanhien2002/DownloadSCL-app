import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div>Logo</div>
            <div style={{ display: 'flex', gap: '15px' }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default Header;