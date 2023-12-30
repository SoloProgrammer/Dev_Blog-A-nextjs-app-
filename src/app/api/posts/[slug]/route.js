import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    // console.log('res',res);
    const { params } = res
    const { slug } = params

    try {
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true },
        })
        const response = new NextResponse(JSON.stringify({ post, status: 200 }));
        return response

    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!", status: 500, error: error.message }))
    }
}