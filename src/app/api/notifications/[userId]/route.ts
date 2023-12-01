import { NextResponse } from "next/server";
import prisma from "@/libs/db/prismadb";

export async function GET(req: Request, res: NextResponse) {
  try {
    const userId = req.url.split("/notifications/")[1];

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID');
    }

    const notifications = await prisma.notification.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        hasNotification: false,
      }
    });

    return NextResponse.json({ message: "Success", notifications }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error loading notification", error },
      { status: 400 }
    );
  } finally {
    await prisma.$disconnect();
  }
}