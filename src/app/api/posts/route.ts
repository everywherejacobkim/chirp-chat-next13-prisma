import { NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/db/prismadb";

export async function POST(req: Request, res: NextResponse) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req, res);
      const { body } = req.body;

      const post = await prisma.post.create({
        data: {
          body,
          userId: currentUser?.id,
        },
      });

      return NextResponse.json({ message: "Success", post }, { status: 200 });
    }
    if (req.method === "GET") {
      const { userId } = req.query;

      let posts;

      if (userId && typeof userId === "string") {
        posts = await prisma.post.findMany({
          where: {
            userId,
          },
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } else {
        posts = await prisma.post.findMany({
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      }

      return NextResponse.json({ message: "Success", posts }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating post", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
