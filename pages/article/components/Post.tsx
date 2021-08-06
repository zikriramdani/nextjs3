import * as React from 'react'
import { Article } from '../../../types'

type Props = {
    post: Article
    deletePost: (id: number) => void
}

const Post: React.FC<Props> = ({ post, deletePost }) => {
    return (
        <div className='Card'>
            <div className='Card--body'>
                <h1 className='Card--body-title'>{post.title}</h1>
                <p className='Card--body-text'>{post.body}</p>
            </div>
            <button className='Card__button' onClick={() => deletePost(post.id)}>
                Delete
            </button>
        </div>
    )
}

export default Post
