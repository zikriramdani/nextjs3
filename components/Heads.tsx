import * as React from 'react';
import Head from 'next/head';

type Props = {
    title: string
}

const Heads: React.FC<Props> = ({ title }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
            <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
            <title>{title}</title>
        </Head>
    )
}

export default Heads