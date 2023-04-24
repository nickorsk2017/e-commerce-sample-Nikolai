export default async function handler(req: {body: {key: string, paths?: Array<string>}}, res: any) {

    // Compare given key to secret key
    if (req.body.key !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    // Get paths array from POST request
    const paths = req.body.paths;
    if (!paths || typeof Array.isArray(paths)) return res.status(400).json({ message: 'Bad Request: No paths specified' })

    try {
        paths.forEach(async (p: any) => {
            await res.unstable_revalidate(p)
        })
        return res.json({ revalidated: true })
    } catch (err) {
        // Catch error and serve 500
        return res.status(500).send('Error revalidating')
    }
}