import Link from 'next/link'
import { Layout } from '../src/components/core/Layout'
import Login from '../src/components/forms/Login'
import { isMounted } from '../src/utils/app.utils'

interface HomeProps {
    stars: string
}

const Home = ({ stars }: HomeProps): JSX.Element => {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <h1 className="app-h1">Welcome {stars}</h1>
                <Link href="/editor">
                    <a>Link</a>
                </Link>
            </div>

            <Login name="Login Form" />

            {isMounted() && (
                <div className="flex justify-center items-center">
                    <p>Only displayed on client side.</p>
                </div>
            )}
        </Layout>
    )
}

export default Home
