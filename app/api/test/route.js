import clientPromise from '../../lib/mongodb'

export async function GET(req) {
    try {
        const client = await clientPromise
        const db = client.db('desa_db') // nama database kamu
        const usersCollection = db.collection('users')

        const users = await usersCollection.find({}).toArray()

        return new Response(JSON.stringify({ users }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (err) {
        console.error(err)
        return new Response(
            JSON.stringify({
                message: '❌ Failed to fetch users',
                error: err.message,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        )
    }
}
