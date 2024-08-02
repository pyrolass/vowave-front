"use client";

import React, { useEffect } from "react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import io from "socket.io-client";
import { SOCKET_BASE_URL } from "@/network/api/endpoints";

export default function NotificationSection({ token }: { token: string }) {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const socket = io(SOCKET_BASE_URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    socket.on("like_notification", (data) => {
      api.open({
        message: "New Like!",
        description: data.message,
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [api, token]);

  return contextHolder;
}
