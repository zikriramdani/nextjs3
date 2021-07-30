import Head from 'next/head'
import Layout from '../components/layout';
import Link from "next/link";
import styles from '../styles/Home.module.css';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

export default function Register() {
    return (
        <Layout>
            <Head>
                <title>Register - Create Next App</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1>Register</h1>
                    
                    <div class="w-100 mb-5">
                        <form action="" method="POST">
                            <div class="mb-3">
                                <label for="exampleInputUsername1" class="form-label">Username</label>
                                <input type="text" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputUsername1" class="form-label">Username</label>
                                <input type="text" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" required />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputUsername1" class="form-label">Username</label>
                                <input type="text" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" required />
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                    
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