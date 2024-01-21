import { auth } from "@/lib/lucia";
import { mongooseConnect } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import * as context from "next/headers";

interface Login {
  email_address: string;
  password: string;
}

export const POST = async (request: NextRequest) => {
  try {
    await mongooseConnect();

    const body: Login = await request.json();

    const { email_address, password } = structuredClone(body);

    const luciaUser = await auth.useKey(
      "email_address",
      email_address,
      password
    );

    const session = await auth.createSession({
      userId: luciaUser.userId,
      attributes: {},
    });

    const authRequest = auth.handleRequest(request.method, context);

    authRequest.setSession(session);

    return NextResponse.json(
      { message: "Successfully logged in" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
};
