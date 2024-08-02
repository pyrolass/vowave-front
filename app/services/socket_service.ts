// app/services/socket_service.js
"use client";

import io, { Socket } from "socket.io-client";

let socket: Socket;

export async function initializeSocket() {
  const response = await fetch("/api/getToken");
  const { token } = await response.json();

  socket = io("http://localhost:3000", {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function connectSocket() {
  if (socket) socket.connect();
}

export function disconnectSocket() {
  if (socket) socket.disconnect();
}

export function listenToLikes(callback) {
  if (socket) {
    socket.on("like_notification", (data) => {
      callback(data);
    });
  }
}
