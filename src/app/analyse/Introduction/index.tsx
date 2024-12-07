import styles from "./styles.module.css";

export default function Introduction() {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Antwerp plant</h5>
      <p className={styles.paragraph}>
        The carbon emissions dashboard of our chemical plant in Antwerp contains
        information on the emissions of our facility, as well as the emissions
        of the facilities in the surrounding area. This information is essential
        in order to monitor and reduce our carbon footprint.
      </p>
    </div>
  );
}
