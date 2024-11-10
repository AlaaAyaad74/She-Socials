import MainTitle from "../../ui/mainTitle/MainTitle";
import PackageCard from "../../ui/packagecard/PackageCard";
import styles from "./packages.module.css";
import Packges from "../../../../data/Packges";
import Button from "../../ui/button/Button";
function Packages() {
  return (
    <section className={styles.main_package}>
      <MainTitle title="Packages" />
      <div className={styles.package_grid}>
        {Packges.map((item, index) => (
          <PackageCard
            img={item.coverImg}
            title={item.title}
            list={item.list}
            btnText={item.btnText}
            key={index}
          />
        ))}
      </div>
      <div className={styles.bottom_cont} data-aos="fade-up">
        <h1>Need something Bespoke? Get in touch</h1>
        <Button path="/" width={191} value="INQUIRE" />
      </div>
    </section>
  );
}

export default Packages;
