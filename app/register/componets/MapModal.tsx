"use client";
import { Modal } from "antd";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const MapContent = dynamic(() => import("./MapContent"), {
  loading: () => <p>Loading map...</p>,
  ssr: false,
});

export default function MapModal({
  isModalOpen,
  setIsModalOpen,
  position,
  setPosition,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
  position: [number, number];
  setPosition: (value: React.SetStateAction<[number, number]>) => void;
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

  return (
    <Modal
      title="Set Location"
      open={isModalOpen}
      onOk={handelOk}
      onCancel={handleCancel}
      width={700}
    >
      <div style={{ height: "400px" }}>
        {isMounted && (
          <MapContent position={position} setPosition={setPosition} />
        )}
      </div>
    </Modal>
  );
}
