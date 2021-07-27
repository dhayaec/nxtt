import { GetStaticProps } from "next"
import { Layout } from "../src/components/core/Layout"
import { isMounted } from "../src/utils/app.utils"

interface HomeProps {
    stars: string
}

const Home = ({ stars }: HomeProps): JSX.Element => (
    <Layout>
        <div className="flex justify-center items-center">
            <h1 className="text-center text-2xl">Welcome {stars}</h1>
        </div>

        <div className="flex justify-center items-center">
            <p>{process.env.NEXT_PUBLIC_ENV_VARIABLE}</p>
        </div>

        {isMounted() && (
            <div className="flex justify-center items-center">
                <p>Only displayed on client side.</p>
            </div>
        )}
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    console.error(process.env.ENV_VARIABLE);

    return {
        props: {
            stars: json.stargazers_count,
        },
    }
}

export default Home
