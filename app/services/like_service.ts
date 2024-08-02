"use server";

import { handlePost } from "@/network/api/client";
import { API_BASE_URL } from "@/network/api/endpoints";

export async function handleLikeUser({
  liked_user_id,
}: {
  liked_user_id: number;
}) {
  try {
    await handlePost(`${API_BASE_URL}/likes/handle_like`, {
      liked_user_id: liked_user_id,
    });
  } catch (error) {
    return { error: `${error}` };
  }
}
