import { mongooseConnect } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/lucia";
import * as context from "next/headers";
import { Session } from "lucia";
import { Log } from "@/models/Log";

export const GET = async (request: NextRequest) => {
  try {
    await mongooseConnect();
    const authRequest = auth.handleRequest(request.method, context);
    const session: Session = await authRequest.validate();
    const USER_ID = session.user.userId;
    const data = await Log.find({
      userId: USER_ID,
    });
    return NextResponse.json({ message: data }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
};
