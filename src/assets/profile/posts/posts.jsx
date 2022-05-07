import './posts.css';
import icon from '../../icon.png';
import Post from './post';
import postsRaw from '../../../redux/state';
const { dispatch } = postsRaw;
const React = require('react');

const textRef = React.createRef();

const addPost2 = (e) => {
    e.preventDefault();
    if (textRef.current.value.trim().length === 0) return;
    dispatch({type: 'ADD_POST', content: textRef.current.value});
};

const newText = () => {
    dispatch({type: 'SAVE_NOTE', content: textRef.current.value });
    textRef.current.value = postsRaw._state.newPostText;
};

const Posts = (Props) => {
    const posts = postsRaw._state.posts.map((p, index)=>{
        return <Post text={p.text} likes={p.likes} name={p.name} id={index}/>
    });
    return (
        <div id='nav-margin'>
            <h1 className='posts-header'>Posts</h1>
            <form onSubmit={addPost2}>
                <textarea ref={textRef} onChange={newText} value={postsRaw.newPostText}/>
                <br/>
                <button type='submit' value="Send">Post</button>
            </form>
            <section id='posts-section'>
                {posts}
            </section>
        </div>
    );
};

export default Posts;