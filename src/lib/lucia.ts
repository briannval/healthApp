import { lucia } from "lucia";
import { nextjs_future } from "lucia/middleware";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import { User } from "@/models/User";
import { Key } from "@/models/Key";
import { Session } from "@/models/Session";

export const auth = lucia({
  adapter: mongoose({
    User,
    Key,
    Session,
  }),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs_future(),
  sessionCookie: {
    expires: false,
  },

  getUserAttributes: (data) => {
    return {
      first_name: data.first_name,
      last_name: data.last_name,
      email_address: data.email_address,
      age: data.age,
    };
  },
});

export type Auth = typeof auth;
