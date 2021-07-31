import React from 'react';
import UserContext from '../lib/userContext';
import Router from 'next/router';

import Cookies from 'js-cookie';

import Head from 'next/head'
import Layout from '../../components/layout';
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Footer from '../../components/footer';

export default function Dashboard(props) {
    const { user, setUser } = React.useContext(UserContext);

    // handle click event of logout button
    const handleLogout = () => {   
        Cookies.remove('jwt');
        setUser(null);
        Router.push('/');
    }

    return (
        <Layout>
            <Head>
                <title>Dashboard - Create Next App</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1>Dashboard</h1>
                    {/* <p>Welcome {user.username}</p> */}
                </div>
                <div className={styles.grid}>
                    <a onClick={handleLogout} className={styles.cursorPointer}>
                        <p>Logout</p>
                    </a>
                </div>
            </main>

            <Footer></Footer>
        </Layout>
    )
}

// export async function getServerSideProps(ctx) {
//     const session = await getSession(ctx)
//     if (!session) {
//         ctx.res.writeHead(302, { Location: '/' })
//         ctx.res.end()
//         return {}
//     }

//     return {
//         props: {
//             user: session.user,
//         },
//     }
// }
