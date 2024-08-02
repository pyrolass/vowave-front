import { cookies } from "next/headers";

export async function handleGet(
  url: string,
  options?: RequestInit
): Promise<Response | { error: string }> {
  const token = cookies().get("token")?.value;

  // Set up headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options?.headers || {}),
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.message || "Something went wrong";
    }
    return response;
  } catch (e) {
    return { error: `${e}` };
  }
}

export async function handlePost(
  url: string,
  data?: object,
  options?: RequestInit
): Promise<Response | { error: string }> {
  const token = cookies().get("token")?.value;

  // Set up headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options?.headers || {}),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      ...options,
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.message || "Something went wrong";
    }

    return response;
  } catch (e) {
    return { error: `${e}` };
  }
}

export async function handlePut(
  url: string,
  data?: object,
  options?: RequestInit
): Promise<Response | { error: string }> {
  const token = cookies().get("token")?.value;

  // Set up headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options?.headers || {}),
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      ...options,
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.message || "Something went wrong";
    }
    return response;
  } catch (e) {
    return { error: `${e}` };
  }
}

export async function handlePatch(
  url: string,
  data?: object,
  options?: RequestInit
): Promise<Response | { error: string }> {
  const token = cookies().get("token")?.value;

  // Set up headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options?.headers || {}),
  };

  try {
    const response = await fetch(url, {
      method: "PATCH",
      ...options,
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.message || "Something went wrong";
    }

    return response;
  } catch (e) {
    return { error: `${e}` };
  }
}

export async function handleDelete(
  url: string,
  data?: object,
  options?: RequestInit
): Promise<Response | { error: string }> {
  const token = cookies().get("token")?.value;

  // Set up headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(options?.headers || {}),
  };

  try {
    const response = await fetch(url, {
      method: "DELETE",
      ...options,
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.message || "Something went wrong";
    }
    return response;
  } catch (e) {
    return { error: `${e}` };
  }
}
