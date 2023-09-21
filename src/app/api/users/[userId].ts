import { NextResponse } from "next/server";
import { useParams } from "next/navigation";
import prisma from "@/libs/db/prismadb";

export async function GET(req: Request) {
  try {
    const params = useParams();
    const userId = params.userId;

    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const followersCount = await prisma.user.count({
      where: {
        followingIds: {
          has: userId,
        },
      },
    });

    return NextResponse.json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Can not find user");
  }
}
