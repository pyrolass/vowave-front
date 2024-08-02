// app/actions/auth.ts
"use server";

import { handlePost } from "@/network/api/client";
import { API_BASE_URL } from "@/network/api/endpoints";
import { cookies } from "next/headers";

type LoginResponse = {
  user_id: number;
  username: string;
  token: string;
};

export async function login(
  formData: FormData
): Promise<LoginResponse | { error: string }> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await handlePost(`${API_BASE_URL}/auth/sign_in`, {
      email,
      password,
    });

    if ("error" in response) {
      throw response.error;
    }

    const data: LoginResponse = await response.json();

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
    };

    cookies().set("token", data.token, cookieOptions);
    cookies().set("user_id", data.user_id.toString(), cookieOptions);
    cookies().set("username", data.username, cookieOptions);

    return data;
  } catch (error) {
    return { error: `${error}` };
  }
}
export async function register({
  username,
  email,
  password,
  lat,
  lon,
}: {
  username: string;
  email: string;
  password: string;
  lat: number;
  lon: number;
}): Promise<LoginResponse | { error: string }> {
  try {
    const response = await handlePost(`${API_BASE_URL}/auth/sign_up`, {
      email,
      password,
      username,
      lat: lat,
      lon: lon,
    });

    if ("error" in response) {
      throw response.error;
    }

    const data: LoginResponse = await response.json();

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict" as const,
    };

    cookies().set("token", data.token, cookieOptions);
    cookies().set("user_id", data.user_id.toString(), cookieOptions);
    cookies().set("username", data.username, cookieOptions);

    return data;
  } catch (error) {
    return { error: `${error}` };
  }
}

export async function logout() {
  cookies().delete("token");
  cookies().delete("user_id");
  cookies().delete("username");
}
