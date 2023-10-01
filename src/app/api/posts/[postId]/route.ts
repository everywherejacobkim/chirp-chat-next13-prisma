import { NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";

export default async function GET(req: Request, res: NextResponse) {
  try {
    const { postId } = req.query;

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error loading post", error },
      { status: 400 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
