import './posts.css'
import icon from '../../icon.png'

const Posts = () => {
    return (
        <div id='nav-margin'>
            <h1 className='posts-header'>Posts</h1>
            <textarea>

            </textarea>
            <br></br>
            <button>Post</button>
            <section id='posts-section'>
                <div className='post'>
                    <img src={icon}></img>
                    <div>
                        <h1>Admin Admin</h1>
                        <p>I Eat Fast Cake Times</p>
                        <p>👍 9999999</p>
                    </div>
                </div>
                <div className='post'>
                    <img src={icon}></img>
                    <div>
                        <h1>Admin Admin</h1>
                        <p>cap above</p>
                        <p>👍 -43</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Posts;