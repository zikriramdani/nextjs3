import * as React from 'react';
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from './article';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TableUser from '../components/TableUser'

export default function IndexPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main className='container'>
            <Navbar />
                <h1>List User</h1>

                <TableUser />
            <Footer />
        </main>
    )
};