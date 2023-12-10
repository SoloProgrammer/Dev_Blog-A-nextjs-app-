import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { Response } from "@/utils/responses";

export const POST = async (req) => {
    try {
        const session = await getAuthSession()
        if (!session) return Response('Not Authenticated!', 401)

        const body = await req.json()
        console.log(body);
        if (!body) return Response("Body not send with the req", 400)

        await prisma.Post.create(
            {
                data: { ...body, userEmail: session.user.email },
                include: { user: true }
            }
        )
        return Response("Post created successfully!", 201, true, false)
    } catch (error) {
        return Response("Some error occured", 500, false, error)
    }
}