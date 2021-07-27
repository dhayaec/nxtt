// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_: NextApiRequest, res: NextApiResponse): any => {
    res.status(200).json({ message: 'Welcome to Next Api' })
}

export default handler
