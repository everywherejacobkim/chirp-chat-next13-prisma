import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";
import serverAuth from "@/libs/serverAuth";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const currentUser = await serverAuth(req, res);
    const { body } = (req as any).body;
    const { postId } = (req as any).params;

    if (!postId) {
      throw new Error("Post not found");
    }

    const comment = await prisma.comment.create({
      data: {
        body,
        postId,
        userId: currentUser?.currentUser?.id,
      },
    });

    try {
      const post = await prisma.post.findUnique({
        where: {
          id: postId
        }
      });

      if (post?.userId) {
        await prisma.notification.create({
          data: {
            body: 'Someone commented to your Chirp!',
            userId: post.userId
          }
        });

        await prisma.user.update({
          where: {
            id: post.userId
          },
          data: {
            hasNotification: true
          }
        })

      }

    } catch(error) {
      console.log(error)
    }

    return NextResponse.json({ message: "Success", comment }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error loading post", error },
      { status: 400 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
