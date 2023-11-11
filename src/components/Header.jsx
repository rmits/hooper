import '../styles/Header.css';
import HoopersHeader from '../assets/images/hoop-header.jpg';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='titleAndNav'>
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
                </div>
                <div className='headerImage'>
                    <img src={HoopersHeader} alt='Hoopers Header' width={'100%'} height={'350px'} />
                </div>
            </header>
        </>
    );
};

export default Header;