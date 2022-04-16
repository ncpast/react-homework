import icon from '../app-icon.jpg'
import Navigation from '../nav/nav.jsx'
import ProfileInfo from './profile-info/profile-info.jsx';
import Dialogs from '../dialogs/dialogs.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Profile = () => {
    return (
        <section id='main-section'>
        <div className="container">
            <div className="left_col">
                <img src={icon} alt='Icon' draggable="false"></img>
            </div>
            <div className="right_col">
                <Navigation />
            </div>
        </div>
        <section id='content-sec'>
                <Routes>
                    <Route path='/' element={<ProfileInfo />}></Route>
                    <Route path='/chats' element={<Dialogs />}>
                        <Route path='*' />
                    </Route>
                </Routes>
        </section>
        </section>
    );
};

export default Profile;