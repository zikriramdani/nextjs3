import * as React from 'react';
import { InferGetStaticPropsType } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TableUser from '../components/TableUser';

import { User } from '../types';

const BASE_URL: string = 'https://reqres.in/api/users';

export default function IndexPage({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [userList, setUserList] = React.useState(users)

    if (!userList) return <h1>Loading...</h1>

    const deleteUser = async (id: number) => {
        console.log('Delete ByID', userList.data)
        // const users: User[] = userList.data.filter((user: User) => user.id !== id)
        // console.log(users)
        // setUserList(users)
    }

    return (
        <main className='container'>
            <Navbar />
                <div className="d-flex">
                    <div className="w-100 align-self-center"><h1>List User</h1></div>
                    <div className="flex-shrink-1">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Add User
                        </button>
                    </div>
                </div>

                {userList.data.map((user: User) => (
                    <TableUser key={user.id} user={user} deleteUser={deleteUser}  />
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
