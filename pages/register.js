import Head from 'next/head'
import Layout from '../components/layout';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from 'react';
import axios from 'axios';

export default function Register(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const name = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    // handle button click of register form
    const handleRegister = () => {
        setError(null);
        setLoading(true);
        axios.post(process.env.NEXT_PUBLIC_API_URL + 'users', { username: username.value, password: password.value, name: name.value }).then(response => {
            setLoading(false);
            console.log('response', response)
            router.push('/register');
        }).catch(error => {
            setLoading(false);
        });
    }

    return (
        <Layout>
            <Head>
                <title>Register - Create Next App</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <h1>Register</h1>
                    
                    <div className="w-100 mb-5">
                        <form action="" method="POST">
                            <div className="mb-3">
                                <label for="exampleInputUsername1" className="form-label">Username</label>
                                <input type="text" name="username" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputUsername1" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" required />
                            </div>
                            <input className="btn btn-primary" type="button" value={loading ? 'Loading...' : 'Sign Up'} onClick={handleRegister} disabled={loading} /><br></br>
                        </form>
                    </div>
                    
                    <Link href="/">
                        <a>
                            <p>Back to Home</p>
                        </a>
                    </Link>
                </div>
            </main>

            <Footer></Footer>
        </Layout>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}