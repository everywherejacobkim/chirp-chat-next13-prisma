import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";
import serverAuth from "@/libs/serverAuth";

async function handler(req: NextRequest, res: NextResponse) {
  try {
      const { postId } = req.body;

      const { currentUser } = await serverAuth(req, res);
    
      const post = await prisma.post.findUnique({
          where: {
              id: postId
          }
      })

      let updatedLikedIds = [...(post?.likedIds) || []]

      if (req.method === 'POST') {
          updatedLikedIds.push(currentUser.id);
      }

      if (req.method === 'DELETE') {
          updatedLikedIds = updatedLikedIds.filter((likedId) => likedId !== currentUser.id);
      }

      const updatedPost = await prisma.post.update({
          where: {
              id: postId
          },
          data: {
              likedIds: updatedLikedIds
          }
      })

    return NextResponse.json(
      { message: "Success", updatedPost},
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something is wrong..", error },
      { status: 400 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export { handler as POST, handler as DELETE };