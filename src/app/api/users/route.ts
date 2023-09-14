import { NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";

export async function GET(req: Request, res: NextResponse) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json("Can not find users");
  }
}
