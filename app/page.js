import Modal from "@/components/Modal";
import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>Components</h1>
      <div className={styles.pills}>
        <PillModal
          label="Hick's Law"
          title="Hick's Law"
          text="Jo flere valgmuligheder, jo længere tid tager det at vælge."
        />
        <PillModal
          label="Fitts's Law"
          title="Fitts's Law"
          text="Jo større og tættere et mål er, jo hurtigere er det at ramme."
        />
      </div>
      {/* A closed <dialog> is hidden. Give it isOpen to see it in step 1.1. From step 1.2, PillModal opens it. */}
      
    </main>
  );
}
