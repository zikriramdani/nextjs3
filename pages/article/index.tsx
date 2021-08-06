import * as React from 'react';
import Heads from '../../components/Heads';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { InferGetStaticPropsType } from 'next';
import AddPost from './components/AddPost';
import Post from './components/Post';
import { Article } from '../../types';

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/posts';


export default function IndexPage({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [postList, setPostList] = React.useState(posts)

    const addPost = async (e: React.FormEvent, formData: Article) => {
        e.preventDefault()
        const post: Article = {
        id: Math.random(),
        title: formData.title,
        body: formData.body,
        }
        setPostList([post, ...postList])
    }

    const deletePost = async (id: number) => {
        const posts: Article[] = postList.filter((post: Article) => post.id !== id)
        console.log(posts)
        setPostList(posts)
    }

    if (!postList) return <h1>Loading...</h1>

    return (
        <main className='container'>
            <Heads title="Article - Create Next App" />

            <Navbar />
                <h1>My posts</h1>
                
                <AddPost savePost={addPost} />

                {postList.map((post: Article) => (
                    <Post key={post.id} deletePost={deletePost} post={post} />
                ))}
            <Footer />
        </main>
    )
}

export async function getStaticProps() {
    const res = await fetch(BASE_URL)
    const posts: Article[] = await res.json()

    return {
        props: {
            posts,
        },
    }
}