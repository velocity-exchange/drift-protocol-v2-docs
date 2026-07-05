import type { Metadata } from "next";
import { BoltMark } from "../../components/BoltMark";
import styles from "./coming-soon.module.css";

export const metadata: Metadata = {
  title: "Coming soon",
};

export default function ComingSoon() {
  return (
    <div className={styles.root}>
      <BoltMark className={styles.mark} />
      <p className={styles.label}>Status</p>
      <h1 className={styles.title}>Docs are coming soon</h1>
      <p className={styles.desc}>
        We&rsquo;re getting the Velocity Exchange documentation ready.
        Check back soon, or follow along in the meantime.
      </p>

      <nav className={styles.links} aria-label="Where to follow along">
        <a
          href="https://www.velocity.exchange/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Velocity Exchange
        </a>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <a
          href="https://discord.com/invite/95kByNnDy5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <a
          href="https://github.com/velocity-exchange"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </nav>
    </div>
  );
}
