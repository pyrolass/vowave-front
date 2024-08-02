"use client";
import { fetchNearbyUsers, NearbyUsers } from "@/app/services/user_service";

import React, { useEffect, useState } from "react";
import UserCard from "./componets/UserCard";

export default function HomePage() {
  const [users, setUsers] = useState<NearbyUsers[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await fetchNearbyUsers();
      if (fetchedUsers && "error" in fetchedUsers) {
        console.error(fetchedUsers.error);
      } else {
        setUsers(fetchedUsers);
      }
    };

    fetchUsers();
  }, []);

  const refetchUsers = async () => {
    const fetchedUsers = await fetchNearbyUsers();
    if (fetchedUsers && "error" in fetchedUsers) {
      console.error(fetchedUsers.error);
    } else {
      setUsers(fetchedUsers);
    }
  };

  return (
    <div className="flex">
      {users.map((user) => (
        <UserCard key={user.user_id} user={user} refetch={refetchUsers} />
      ))}
    </div>
  );
}
