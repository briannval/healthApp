import { mongooseConnect } from "@/lib/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/lucia";

interface Signup {
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
}

export const POST = async (request: NextRequest) => {
  try {
    await mongooseConnect();
    const body: Signup = await request.json();

    const { first_name, last_name, password } = structuredClone(body);
    let { email_address } = structuredClone(body);

    const user = await auth.createUser({
      key: {
        providerId: "email_address",
        providerUserId: email_address,
        password,
      },
      attributes: {
        first_name,
        last_name,
        email_address,
      },
    });

    console.log(user);

    return NextResponse.json(
      { message: "Successfully created user" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.error();
  }
};
