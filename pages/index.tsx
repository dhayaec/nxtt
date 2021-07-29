import { GetStaticProps } from 'next'
import Link from 'next/link'
import Fetcher from '../src/components/core/fetcher/Fetcher'
import { Layout } from '../src/components/core/Layout'
import Login from '../src/components/forms/Login'
import { Button, ButtonWidth } from '../src/components/ui/Button'
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
                    <i>
                        <Fetcher />
                    </i>
                </div>
            )}

            {isMounted() && (
                <div className="flex justify-center items-center">
                    <p>Only displayed on client side.</p>
                </div>
            )}

            <div className="flex justify-center items-center mx-auto w-1/2 md:w-2/6 lg:w-1/6">
                <Button label="Sign Up" width={ButtonWidth.full} />
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    console.error(process.env.ENV_VARIABLE)

    return {
        props: {
            stars: json.stargazers_count,
        },
    }
}

export default Home
