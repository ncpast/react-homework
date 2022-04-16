import style from './profile-info.module.css'
import icon from '../../icon.png'
import './profile-info.jsx'
import Posts from '../posts/posts.jsx'

const ProfileInfo = () => {
    return (
        <section>
        <div id='profile-info'>
        <section id={style.profileInfoSec}>
            <img id={style.profilePicture} src={icon}></img>
            <div>
                <h1 id={style.username}>Admin Admin</h1>
                <p id={style.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </section>
        </div>
        <div id='posts'>
            <Posts />
        </div>
        </section>
    );
};

export default ProfileInfo;