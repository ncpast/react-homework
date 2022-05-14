import './posts.css';
import icon from '../../icon.png';
import Post from './post';
import postsRaw from '../../../redux/state';
import { addPostActionCreator, saveNoteActionCreator } from '../../../redux/state';
const { dispatch } = postsRaw;
const React = require('react');

const textRef = React.createRef();

const addPost2 = (e) => {
    e.preventDefault();
    if (textRef.current.value.trim().length === 0) return;
    let action = addPostActionCreator(textRef.current.value);
    dispatch(action);
    textRef.current.value = '';
};

const newText = () => {
    let action = saveNoteActionCreator(textRef.current.value);
    dispatch(action);
    textRef.current.value = postsRaw._state.newPostText;
};

const Posts = (Props) => {
    const posts = postsRaw._state.posts.map((p, index)=>{
        return <Post text={p.text} likes={p.likes} name={p.name} id={index} dispatch={dispatch}/>
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