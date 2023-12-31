import { Response } from "@/utils/responses";
import prisma from "@/utils/connect";

export const PUT = async (req) => {
  try {
    const { searchParams } = new URL(req.url);

    const subId = searchParams.get("subId");
    const authorId = searchParams.get("authorId");

    const [subscriber, author] = await prisma.$transaction([
      prisma.User.findUnique({ where: { id: subId } }),
      prisma.User.findUnique({ where: { id: authorId } }),
    ]);

    const checkIsSubscribed = () => author.subscribers && author.subscribers.includes(subscriber.email) // return boolean

    const pullQuery = {
      set: author.subscribers.filter((sub) => sub !== subscriber.email),
    };
    const pushQuery = { push: subscriber.email };

    const MESSAGE = checkIsSubscribed() ? "unsubscribed" : "subscribed";

    await prisma.User.update(
      {
        where: { id: authorId },
        data: {
          subscribers: checkIsSubscribed() ? pullQuery : pushQuery,
        },
      },
      { new: true }
    );

    return Response(MESSAGE, 200, true);
  } catch (error) {
    return Response("Something went wrong!", 500, false, error);
  }
};
