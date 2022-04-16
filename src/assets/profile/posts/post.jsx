import './posts.css'
import icon from '../../icon.png'

const Posts = (Props) => {
    return (
    <div className='post'>
        <img src={icon}></img>
        <div>
            <h1>{Props.name}</h1>
            <p>{Props.text}</p>
            <p>👍 {Props.likes}</p>
        </div>
    </div>
    )
}

export default Posts;