"use client";

import { useState } from "react";
import Modal from "./Modal";
import Pill from "./Pill";

export default function PillModal({ label, title, text, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Pill className={className} onClick={() => setIsOpen(true)}>{label}</Pill>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        text={text}
      />
    </>
  );
}
