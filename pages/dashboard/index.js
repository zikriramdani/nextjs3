import Head from 'next/head'
import Layout from '../../components/layout';
import Link from "next/link";
import styles from '../../styles/Home.module.css';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
// import { getSession } from 'next-auth/client'

export default function Dashboard({ user, props }) {
    const router = useRouter();
    // handle click event of logout button
    const handleLogout = () => {    
        router.push('/');
    }

    return (
        <Layout>
            <Head>
                <title>Page 1 - Create Next App</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1>Dashboard</h1>
                    {/* <p>Welcome {user.email}</p> */}
                </div>
                <div className={styles.grid}>
                    {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
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
