import * as React from 'react';
import Head from 'next/head';

type Props = {
    title: string
}

const Heads: React.FC<Props> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default Heads