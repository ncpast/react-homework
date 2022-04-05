import './profile-info.css'
import icon from '../../icon.png'
import './profile-info.jsx'

const ProfileInfo = () => {
    return (
        <section id='profile-info-sec'>
            <img id='profile-picture' src={icon}></img>
            <div>
                <h1 id='username'>Admin Admin</h1>
                <p id='bio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </section>
    );
};

export default ProfileInfo;