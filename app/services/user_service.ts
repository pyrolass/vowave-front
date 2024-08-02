"use server";

import { handleGet } from "@/network/api/client";
import { API_BASE_URL } from "@/network/api/endpoints";

export type UserInfo = {
  user_id: number;
  username: string;
  lat: number;
  lon: number;
};

export type NearbyUsers = {
  user_id: number;
  username: string;
  lat: number;
  lon: number;
  _count: {
    likes: number;
  };
  distance: number;
};

export async function fetchNearbyUsers(): Promise<
  NearbyUsers[] | { error: string }
> {
  try {
    const response = await handleGet(`${API_BASE_URL}/user/nearby`);

    if ("error" in response) {
      throw response.error;
    }

    const data = await response.json();
    const users = data as NearbyUsers[];

    return users;
  } catch (error) {
    return { error: `${error}` };
  }
}

export async function fetchUserInfo(): Promise<UserInfo | { error: string }> {
  try {
    const response = await handleGet(`${API_BASE_URL}/user`);

    if ("error" in response) {
      throw response.error;
    }

    const data = await response.json();
    const user = data as UserInfo;

    return user;
  } catch (error) {
    return { error: `${error}` };
  }
}
