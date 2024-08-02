"use client";
import { fetchUserInfo, UserInfo } from "@/app/services/user_service";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const MapContent = dynamic(() => import("./components/ProfileMapContent"), {
  loading: () => <p className="text-center">Loading map...</p>,
  ssr: false,
});

export default function ProfilePage() {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);
    const fetchedUser = await fetchUserInfo();
    if (fetchedUser && "error" in fetchedUser) {
      console.error(fetchedUser.error);
      setError("Failed to load user data. Please try again.");
    } else {
      setUser(fetchedUser);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center text-xl mt-8">Loading user data...</div>;
  }

  if (error) {
    return <div className="text-center text-xl mt-8 text-red-500">{error}</div>;
  }

  if (!user) {
    return (
      <div className="text-center text-xl mt-8 text-red-500">
        No user data available.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8 max-w-3xl mx-auto">
      <div className="w-full mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{user.username}</h1>
        <p className="text-xl text-gray-600 mb-4">User ID: {user.user_id}</p>
        <div className="flex justify-center gap-4 mb-4">
          <p>Latitude: {user.lat}</p>
          <p>Longitude: {user.lon}</p>
        </div>
        <button
          onClick={fetchUserData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Refresh Data
        </button>
      </div>
      <div className="w-full h-96 rounded-lg overflow-hidden">
        <MapContent position={[user.lat, user.lon]} />
      </div>
    </div>
  );
}
