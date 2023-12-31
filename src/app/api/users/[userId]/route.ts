import { NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";

export async function GET(req: Request, res: NextResponse) {
  try {
    const userId = req.url.split("/users/")[1];
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (existingUser) {
      return NextResponse.json({ ...existingUser });
    } else {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Error getting user" }), {
      status: 500,
    });
  }
}
