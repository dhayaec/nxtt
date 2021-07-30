import React, { ReactElement } from 'react'
import { useApi } from '../../../utils/app.utils'

interface FetcherResponse extends Record<string, unknown> {
    slip: {
        id: number
        advice: string
    }
}

export default function Fetcher(): ReactElement {
    const url = `https://api.adviceslip.com/advice`
    const { data, isLoading, hasError } = useApi(url, {})

    if (isLoading) return <p>Loading...</p>

    if (hasError) return <p>Failed to fetch open jobs 😟</p>

    return <i>{JSON.stringify((data as FetcherResponse)?.slip?.advice)}</i>

    return
}
