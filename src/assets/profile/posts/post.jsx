import './posts.css'
import icon from '../../icon.png'
import { addLikeActionCreator } from '../../../redux/state';

const Posts = (Props) => {
    const getId = (id, type) => {
        if(type === 'com') return `comment-${id}`;
        else if (type === 'likes') return `likes-${id}`;
        else if (type === 'button') return `like-button-${id}`;
        else return id;
    };

    const addLike = (id) => {
        let action = addLikeActionCreator(id);
        Props.dispatch(action);
    };

    return (
    <div className='post' id={getId(Props.id, 'com')}>
        <img src={icon}></img>
        <div>
            <h1>{Props.name}</h1>
            <p className='post-text'>{Props.text}</p>
            <section className='like-counter'>
                <p className='post-like' id={getId(Props.id, 'button')} onClick={() => addLike(Props.id)}>👍</p>
                <p className='post-like-counter' id={getId(Props.id, 'likes')}>{Props.likes}</p>
            </section>
        </div>
    </div>
    )
}

export default Posts;