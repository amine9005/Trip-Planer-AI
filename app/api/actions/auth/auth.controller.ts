"use server";
import { getAuth } from "@/lib/auth";
import { SignInSchemaType, SignUpSchemaType } from "@/validations/user.zod";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
// import { getClient } from "@/db/mongoose";

// const db = await getClient();
const auth = await getAuth();

export async function signUpAction(formData: SignUpSchemaType) {
	const name = formData.username as string;
	const email = formData.email as string;
	const password = formData.password as string;
	await auth.api.signUpEmail({
		body: {
			name,
			email,
			password,
		},
	});
}

export async function signInAction(formData: SignInSchemaType) {
	const email = formData.email as string;
	const password = formData.password as string;
	const rememberMe = formData.remember as boolean;
	await auth.api.signInEmail({
		body: { email, password, rememberMe },
	});
}

export async function signOutAction() {
	await auth.api.signOut({
		headers: await headers(),
	});

	redirect("/");
}

// export async function requestResetPasswordAction(email: string) {
//   const user = await db.collection("user").findOne({ email });

//   if (!user) throw new Error("User Email Not Found");

//   return await auth.api.requestPasswordReset({
//     body: {
//       email: email, // required
//       redirectTo: `${process.env.BETTER_AUTH_URL}/reset-password`,
//     },
//   });
// }

// export async function resetPasswordAction(newPassword: string, token: string) {
//   await auth.api.resetPassword({
//     body: {
//       newPassword: newPassword, // required
//       token, // required
//     },
//   });

//   return { success: true };
// }

// export async function isSubscribedAction() {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (session?.user?.plan === "premium") {
//     return true;
//   }

//   return false;
// }

export async function isAuthenticatedAction() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return false;
	}

	return true;
}
