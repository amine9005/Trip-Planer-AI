"use server";
// import { isSubscribedAction } from "@/app/api/actions/auth/auth.controller";
import { getAuth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const auth = await getAuth();

export async function getSession() {
  try {
    const session = auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      throw new Error(`Authentication Error`);
    }

    return session;
  } catch {
    console.log("Authentication failed");
  }
}

export async function authIsRequired() {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return session;
}

export async function authNotRequired() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }
}

export async function getUserData() {
  try {
    const data = await getSession();
    return data?.user;
  } catch (e) {
    console.log("Get User Data Error: ", e);
    return null;
  }
}

// export async function isPremiumUser() {
//   const result = await isSubscribedAction();

//   if (!result) {
//     redirect("/");
//   }
// }
