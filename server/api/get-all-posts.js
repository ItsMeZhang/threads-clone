import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    // cari data post
    let posts = await prisma.posts.findMany({
        orderBy: { id: "desc" },
        include: { likes: true } // relationship dgn tabel likes
    })
    return posts
})