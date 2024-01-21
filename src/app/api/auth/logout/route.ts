import { mongooseConnect } from "@/lib/mongoose";
import { auth } from "@/lib/lucia";
import { Session } from "lucia";
import * as context from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await mongooseConnect();

  const authRequest = auth.handleRequest(request.method, context);
  const session: Session = await authRequest.validate();
  await auth.invalidateSession(session.sessionId);
  return NextResponse.json({ message: "Successfully logout" }, { status: 200 });
};
