import '../styles/Header.css';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div>
                    <h1>Hooper</h1>
                </div>
                <nav className='nav'>
                    <ul className='navItems'>
                        <li><a href='/' className='navLink'>Home</a></li>
                        <li><a href='/cart' className='navLink'>Cart</a></li>
                        <li><a href='/stats' className='navLink'>Stats</a></li>
                    </ul>
                </nav>
                
            </header>
        </>
    );
};

export default Header;