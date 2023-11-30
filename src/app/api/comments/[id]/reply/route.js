import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { Response } from "@/utils/responses";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    const { id } = params
    const session = await getAuthSession()

    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }), { status: 401 });
    }

    if (!id) return Response("Comment Id not passed with the request!", 422, false, error)


    try {
        let body = await req.json()
        const user = await prisma.User.findUnique({
            where: { email: session.user.email }
        })
        await prisma.$transaction([
            prisma.Reply.create(
                { data: { ...body, userId: user.id, commentId: id } },
                { new: true }),
            prisma.Comment.update({
                where: { id },
                data: { replyCount: { increment: 1 } }
            })
        ])

        return Response("Reply added!", 201, true, false)

    } catch (error) {
        return Response("Something went wrong!", 500, false, error)
    }
}

export const GET = async (_, { params }) => {
    const session = await getAuthSession()
    if (!session) return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }), { status: 401 });

    try {
        const { id } = params
        if (!id) return Response("Comment Id not passed with the request!", 422, false, error)

        const replies = await prisma.Reply.findMany({
            where: { commentId: id },
            include: { user: true }
        })

        return Response("Replies fetched!", 200, true, false, { replies })

    } catch (error) {
        return Response("Something went wrong!", 500, false, error)
    }
}