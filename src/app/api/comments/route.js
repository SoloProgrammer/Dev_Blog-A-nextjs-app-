import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { Response } from "@/utils/responses";
import { NextResponse } from "next/server";

// GET all comments of a post
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");
    const query = {
        where: { ...(postSlug && { postSlug }) },
        include: { user: true },
    }
    try {
        const [comments, count] = await prisma.$transaction([
            prisma.Comment.findMany(query),
            prisma.Comment.count()
        ]);
        return new NextResponse(JSON.stringify({ comments, count, status: 200 }));
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                message: "Something went wrong!",
                status: 500,
                error: error.message,
            })
        );
    }
};

// CREATE A COMMENT
export const POST = async (req) => {

    // Authenticate user sessions on server side

    const session = await getAuthSession()

    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'Not Authenticated', status: 401 }));
    }

    try {
        const body = await req.json()
        const comment = await prisma.Comment.create({
            data: { ...body, userEmail: session.user.email }
        })
        return Response("Your Comment is added", 200, true, false, comment);
    } catch (error) {
        return Response("Something went wrong!", 500, false, error)
    }
};

// DELETE A COMMENT

export const DELETE = async (req) => {

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    
    if (!id) Response("Comment Id not passed with params!", 405, false, true)
    try {
        await prisma.Comment.delete({
            where: { id }
        }, { new: true })

        return Response("Comment deleted", 200, true, false)
    } catch (error) {
        return Response("Something went wrong!", 500, false, error)
    }

}