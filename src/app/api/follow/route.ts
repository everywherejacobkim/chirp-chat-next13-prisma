import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";
import serverAuth from "@/libs/serverAuth";

export async function handler(req: NextRequest, res: NextResponse) {
  try {
    const userId = (req as any).params.userId;
    const { currentUser } = await serverAuth(req, res);

    console.log("이것을 확인하시오!!!", userId);

    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
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
      { message: "Success", currentUser },
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
