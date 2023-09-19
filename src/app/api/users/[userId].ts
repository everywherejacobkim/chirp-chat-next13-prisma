import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/db/prismadb";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;

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

    return res.json({ ...existingUser, followersCount });
  } catch (error) {
    console.log(error);
    return res.json("Can not find user");
  }
}
