import { authenticate } from "@/middlewares/getAuthSession";
import { sendEmail } from "@/services/sendMail";
import prisma from "@/utils/connect";
import { Response } from "@/utils/responses";

const createPostHandler = async (req) => {
  try {
    const { session } = req;
    const body = await req.json();
    if (!body) return Response("Body not send with the req", 400);

    const post = await prisma.Post.create({
      data: { ...body, userEmail: session.user.email },
      include: { user: true },
    });
    console.log(post, "post-----");

    sendEmail(
      `"Dev_Blog/@${post.user.name}" prathamshinde987@gmail.com`,
      ["pratham.shinde@techsierra.in", "pratham.shinde@wunderkind.co"],
      `Dev_Blog - New Post from ${post.user.name}`,
      post
    );

    return Response("Post created successfully!", 201, true, false);
  } catch (error) {
    return Response("Some error occured", 500, false, error);
  }
};
export const POST = authenticate(createPostHandler);
