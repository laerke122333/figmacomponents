import styles from "./Pill.module.css";

// Figma: the component set "Pill" with the variants Type and State.
// Give it children and onClick (step 1.1), and turn Type into a prop (step 1.4).
export default function Pill({ onClick, children }) {
  return (
    <button type="button" className={styles.pill} onClick={onClick}>
      {children}
    </button>
  );
}
