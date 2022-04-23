import './posts.css'
import icon from '../../icon.png'
import Post from './post';
import postsRaw from '../../msg'
import { addPost } from '../../msg'
const React = require('react');

const textRef = React.createRef();

const addPost2 = (e) => {
    e.preventDefault();
    if (textRef.current.value.trim().length === 0) return;
    addPost(textRef.current.value);
};

const Posts = (Props) => {
    const posts = postsRaw.map((p)=>{
        return <Post text={p.text} likes={p.likes} name={p.name}/>
    });
    return (
        <div id='nav-margin'>
            <h1 className='posts-header'>Posts</h1>
            <form onSubmit={addPost2}>
                <textarea ref={textRef}/>
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