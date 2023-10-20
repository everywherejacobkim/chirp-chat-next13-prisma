import { NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";
import serverAuth from "@/libs/serverAuth";

export async function handler(req: Request, res: NextResponse) {
  try {
    const body = req.body as any as { userId: string };
    const { userId } = body;
    const { currentUser } = await serverAuth(req, res);

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    let updatedFollowingIds = [...(user.followingIds || [])];

    if (req.method === "POST") {
      updatedFollowingIds.push(userId);
    }

    if (req.method === "DELETE") {
      updatedFollowingIds = updatedFollowingIds.filter(
        (followingId) => followingId !== userId
      );
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });

    return NextResponse.json(
      { message: "Success", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error loading post", error },
      { status: 400 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export { handler as POST, handler as DELETE };
