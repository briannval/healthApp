import { mongooseConnect } from "@/lib/mongoose";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Session } from "lucia";
import { auth } from "@/lib/lucia";
import * as context from "next/headers";
import { Log } from "@/models/Log";
import { generateRandomString } from "lucia/utils";

const getFormattedDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = today.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export const POST = async (request: NextRequest) => {
  try {
    await mongooseConnect();

    const body = await request.json();
    const { feeling, sleep, description, exercise } = structuredClone(body);

    const authRequest = auth.handleRequest(request.method, context);
    const session: Session = await authRequest.validate();
    const USER_ID = session.user.userId;
    const TODAY_DATE = getFormattedDate();

    const TOKEN = generateRandomString(64);

    console.log(USER_ID, TODAY_DATE);

    await Log.create({
      _id: TOKEN,
      date: TODAY_DATE,
      feeling: feeling,
      sleep: sleep,
      description: description,
      exercise: exercise,
      userId: USER_ID,
    });

    return NextResponse.json({ message: "Successfully created log" });
  } catch (e) {
    return NextResponse.error();
  }
};
