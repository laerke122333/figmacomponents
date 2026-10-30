import PillModal from "@/components/PillModal";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.frame} data-node-id="1:67" data-name="iPhone 16 - 1">
        <PillModal
          className={styles.primaryPill}
          label="Primary"
          title="Ditte mangler en legekammerat"
          text="Ditte bor i Viby og har ikke nok venner, vil du være hendes ven?"
        />
      </div>
    </main>
  );
}
