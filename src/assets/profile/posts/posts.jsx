import './posts.css'
import icon from '../../icon.png'
import Post from './post';
const postsRaw = require('../../msg.json');

const Posts = (Props) => {
    const posts = postsRaw.map((p)=>{
        return <Post text={p.text} likes={p.likes} name={p.name}/>
    });
    return (
        <div id='nav-margin'>
            <h1 className='posts-header'>Posts</h1>
            <textarea>

            </textarea>
            <br></br>
            <button>Post</button>
            <section id='posts-section'>
                {posts}
            </section>
        </div>
    );
};

export default Posts;