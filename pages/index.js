import React, { useState } from "react";
import Router from 'next/router';
import UserContext from '../lib/userContext';
import api from '../store'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Footer from '../components/footer';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

export default function Home(props) {
    const { setUser } = React.useContext(UserContext)
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    // handle button click of login form
    const handleLogin = async (event) => {
        event.preventDefault()
        api.post('/auth/login', { email, password }).then((response) => {
            const { token } = response.data
            // Cookies.set('jwt', token);

        // fetch user data
        api.get('/me').then(({ data }) => {
            setUser(data)
            Router.push('/dashboard');
        })

        }).catch(({ response }) => {
            if (response?.status === 401) {
                alert('Invalid credentials')
            }
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Login - Create Next App</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                Get started
                </p>

                {/* <div className="w-100">
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="email" value="zikri@gmail.com" onChange={e => setEmail(e.target.value)} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" value="123456" onChange={e => setPassword(e.target.value)} className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div> */}

                <div className={styles.grid}>
                    <Link href="/register">
                        <a className={styles.card}>
                            <p>Belum punya akun? Daftar disini.</p>
                        </a>
                    </Link>
                </div>
            </main>

            <Footer></Footer>
        </div>
    )
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