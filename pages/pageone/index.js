import Head from 'next/head'
import Layout from '../../components/layout';
import Link from "next/link";
import styles from '../../styles/Home.module.css'

export default function Pageone() {
    return (
        <Layout>
            <Head>
                <title>Page 1 - Create Next App</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1>Page 1</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    <Link href="/">
                        <a>
                            <p>Back to Home</p>
                        </a>
                    </Link>
                </div>
            </main>
        </Layout>
    );
}