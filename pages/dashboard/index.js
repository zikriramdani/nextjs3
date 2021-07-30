import Head from 'next/head'
import Layout from '../../components/layout';
import Link from "next/link";
import styles from '../../styles/Home.module.css'
// import { getSession } from 'next-auth/client'

export default function Dashboard({ user }) {
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
                    <Link href="/">
                        <a>
                            <p>Logout</p>
                        </a>
                    </Link>
                </div>
            </main>
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
