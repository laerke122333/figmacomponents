"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, title, text }) {
  const dialogRef = useRef(null);

  // showModal() gives focus handling, Esc and a backdrop. The open attribute alone does not.
  useEffect(() => {
    if (isOpen && !dialogRef.current.open) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          dialogRef.current.close();
        }
      }}
    >
      <img
        className={styles.icon}
        src="/fluent-emoji-sad-16-regular.svg"
        alt=""
        width="53"
        height="53"
      />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </dialog>
  );
}
