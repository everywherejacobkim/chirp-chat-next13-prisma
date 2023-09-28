import { NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prisma from "@/libs/db/prismadb";
import { useSession } from "next-auth/react";

export async function PATCH(req: Request, res: NextResponse) {
  try {
    const { currentUser } = await serverAuth(req, res);
    const { name, username, profileImage, coverImage, bio } = await req.json();

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        name,
        username,
        profileImage,
        coverImage,
        bio,
      },
    });

    return NextResponse.json(
      { message: "Success", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating profile", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
