import icon from '../app-icon.jpg'
import Navigation from '../nav/nav.jsx'
import ProfileInfo from './profile-info/profile-info.jsx';
import Posts from './posts/posts.jsx'

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
            <div id='profile-info'>
              <ProfileInfo />
            </div>
            <div id='posts'>
               <Posts />
            </div>
        </section>
        </section>
    );
};

export default Profile;