import React, { ReactElement, useEffect, useState } from 'react'

export default function Fetcher(): ReactElement {
    const [advice, setAdvice] = useState('')

    useEffect(() => {
        const url = 'https://api.adviceslip.com/advice'

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setAdvice(json.slip.advice)
            } catch (error) {
                console.log('error', error)
            }
        }

        fetchData()
    }, [])

    return <div>{advice}</div>
}
