"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

export default function PillModal({ label, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill onClick={() => setIsOpen(true)}>{label}</Pill>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        text={text}
      />
    </>
  );
}
