import './posts.css'
import icon from '../../icon.png'

const Posts = (Props) => {
    const getId = (id, type) => {
        if(type === 'com') return `comment-${id}`;
        else if (type === 'likes') return `likes-${id}`;
        else if (type === 'button') return `like-button-${id}`;
        else return id;
    }
    return (
    <div className='post' id={getId(Props.id, 'com')}>
        <img src={icon}></img>
        <div>
            <h1>{Props.name}</h1>
            <p className='post-text'>{Props.text}</p>
            <section className='like-counter'>
                <p className='post-like' id={getId(Props.id, 'button')}>👍</p>
                <p className='post-like-counter' id={getId(Props.id, 'likes')}>{Props.likes}</p>
            </section>
        </div>
    </div>
    )
}

export default Posts;