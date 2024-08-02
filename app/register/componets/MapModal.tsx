"use client";
import { Modal } from "antd";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./MapContent"), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

export default function MapModal({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handelOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const position: [number, number] = [51.505, -0.09];

  return (
    <Modal
      title="Set Location"
      open={isModalOpen}
      onOk={handelOk}
      onCancel={handleCancel}
      width={700}
    >
      <div style={{ height: "400px" }}>
        {isMounted && <Map position={position} />}
      </div>
    </Modal>
  );
}
