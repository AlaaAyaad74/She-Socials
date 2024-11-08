import lovecards from "../../../../data/lovecards";
import Button from "../button/Button";
import LoveCard from "./loveCard/LoveCard";
import styles from "./loveNotes.module.css";
function LoveNotes() {
  return (
    <section className={styles.loveNotes_Container}>
      <h1>LOVE NOTES</h1>
      <p className={styles.caption}>from real clients</p>
      <div className={styles.content}>
        <div className={styles.loveNotes_grid}>
          {lovecards.map((item, index) => (
            <LoveCard
              img={item.img}
              paragraph={item.paragraph}
              span={item.span}
              middle={item.middle}
              key={index}
            />
          ))}
        </div>
        <Button path="/" value="READ MORE   >>" width={175} />
      </div>
    </section>
  );
}

export default LoveNotes;
