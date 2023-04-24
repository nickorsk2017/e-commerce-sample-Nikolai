export default async function handler(req: {query: {key: string, path: string}}, res: any) {
    
    // Compare given key to secret key
    if (req.query.key !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    // Get paths array from POST request
    const path = req.query.path;
    if (!path) return res.status(400).json({ message: 'Bad Request: No paths specified' })

    try {
        res.revalidate(path);
        return res.json({ revalidated: true })
    } catch (err) {
        // Catch error and serve 500
        return res.status(500).send('Error revalidating')
    }
}