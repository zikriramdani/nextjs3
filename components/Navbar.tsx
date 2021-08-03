import * as React from 'react'
import Link from "next/link";
type Props = {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="d-flex">
            <Link href="/">
                <a className="nav-link text-white">Home</a>
            </Link>
            <Link href="/article">
                <a className="nav-link text-white">Article</a>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar