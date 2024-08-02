"use client";
import { handleLikeUser } from "@/app/services/like_service";
import { NearbyUsers } from "@/app/services/user_service";
import { Button, Card } from "antd";
import React from "react";

export default function UserCard({
  user,
  refetch,
}: {
  user: NearbyUsers;
  refetch: () => void;
}) {
  return (
    <div className="m-4">
      <Card
        key={user.user_id}
        title={user.username}
        bordered={false}
        style={{ width: 300 }}
      >
        <p>Likes : {user._count.likes}</p>
        <p>Distance : {user.distance}</p>
        <Button
          className="w-full mt-5"
          onClick={async () => {
            try {
              await handleLikeUser({ liked_user_id: user.user_id });
              refetch();
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Like
        </Button>
      </Card>
    </div>
  );
}
