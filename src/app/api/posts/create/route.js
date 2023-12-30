import { authenticate } from "@/middlewares/getAuthSession";
import prisma from "@/utils/connect";
import { Response } from "@/utils/responses";

const createPostHandler = async (req) => {
    try {
        const { session } = req
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
export const POST = authenticate(createPostHandler)