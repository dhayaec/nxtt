import { useRouter } from 'next/router'

const Post = (): JSX.Element => {
    const router = useRouter()
    const { slug } = router.query
    console.error(slug, 'slug')

    return (
        <>
            <h1>Slug: {slug}</h1>
        </>
    )
}

export default Post