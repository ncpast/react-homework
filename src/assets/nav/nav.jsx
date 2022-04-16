import './nav.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <section>
                <p><NavLink to='/' className='web-nav'>Profile </NavLink></p>
                <p><NavLink to='/chats' className='web-nav'>Chats</NavLink></p>
                <p><NavLink to='/people' className='web-nav'>People</NavLink></p>
                <p><NavLink to='/likes' className='web-nav'>Likes</NavLink></p>
                <p><NavLink to='/settings' className='web-nav'>Settings</NavLink></p>
            </section>
        </nav>
    )
}

export default Navigation;