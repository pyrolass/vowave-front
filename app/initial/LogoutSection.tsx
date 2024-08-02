"use client";

import { Modal } from "antd";
import { logout } from "../services/auth_service";
import { useRouter } from "next/navigation";

export default function LogoutSection() {
  const router = useRouter();

  const handleSignOut = () => {
    logout();

    router.replace("/login");
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={() => {
        Modal.confirm({
          title: "Are you sure you want to log out",
          okText: "Logout",
          okType: "danger",
          cancelText: "No, Cancel",
          onOk() {
            handleSignOut();
          },
        });
      }}
    >
      Logout
    </button>
  );
}
