import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      console.log("No session: Need login");
      return new NextResponse(
        JSON.stringify({ authenticated: false, data: null })
      );
    }

    console.log("Got session", session);

    return new NextResponse(
      JSON.stringify({
        authenticated: true,
        data: session.user || null,
      })
    );
  } catch (error) {
    console.error("Error getting session", error);

    return new NextResponse(
      JSON.stringify({ message: "Error getting session" })
    );
  }
}
