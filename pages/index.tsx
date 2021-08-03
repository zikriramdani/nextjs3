import * as React from 'react';
import { InferGetStaticPropsType } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TableUser from '../components/TableUser';

import Post from '../components/Post'
import { User } from '../types'

const BASE_URL: string = 'https://reqres.in/api/users'

export default function IndexPage({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [userList, setPostList] = React.useState(users)

    if (!userList) return <h1>Loading...</h1>

    return (
        <main className='container'>
            <Navbar />
                <h1>List User</h1>

                {userList.map((user: User) => (
                    <TableUser key={user.id} user={user} />
                ))}
            <Footer />
        </main>
    )
};

export async function getStaticProps() {
    const res = await fetch(BASE_URL)
    const users: User[] = await res.json()

    return {
        props: {
            users,
        },
    }
}
