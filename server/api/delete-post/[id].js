import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {  
    //   akses value id melalui event.context.params.id
    const deleted = await prisma.posts.delete({
        where: { id: Number(event.context.params.id) },
    })

    return deleted
})