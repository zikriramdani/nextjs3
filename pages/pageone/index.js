import Layout from '../../components/layout';
import Link from "next/link";

export default function Pageone() {
    return (
        <Layout>
            <h1>Page 1</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
            <Link href="/">
                <a>
                    <p>Back to Home</p>
                </a>
            </Link>
        </Layout>
    );
}