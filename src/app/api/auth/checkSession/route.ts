import { Session } from "lucia";
import * as context from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/lucia";

export const GET = async (req: NextRequest) => {
  try {
    const authRequest = auth.handleRequest(req.method, context);
    const session: Session = await authRequest.validate();
    if (!session) {
      return NextResponse.json({ message: "NO SESSION" }, { status: 200 });
    }
    return NextResponse.json({ message: "SESSION" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
};
