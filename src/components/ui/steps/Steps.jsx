import React from "react";
import PropTypes from "prop-types";
import styles from "./steps.module.css";
import Button from "../button/Button";

function Steps({ steps }) {
  return (
    <section className={styles.main_Steps}>
      {steps.map((item, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <div
              className={styles.steps_grid}
              style={item.marginTop ? { marginTop: "4rem" } : null}
            >
              <div
                className={styles.img_container}
                style={{
                  backgroundImage: `url('/love1.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                }}
              ></div>
              <div className={styles.step_content}>
                <h1>{item.title}</h1>
                <h2>{item.subTitle}</h2>
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div
              className={styles.steps_grid}
              style={item.marginTop ? { marginTop: "4rem" } : null}
            >
              <div className={styles.step_content}>
                <h1>{item.title}</h1>
                <h2>{item.subTitle}</h2>
                {item.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div
                className={styles.img_container}
                style={{
                  backgroundImage: `url('/love2.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                }}
              ></div>
            </div>
          )}
        </React.Fragment>
      ))}
      <div className={styles.bottom_cont}>
        <h1>Don&apos;t leave it another minute</h1>
        <Button path="/" width={191} value="INQUIRE" />
      </div>
    </section>
  );
}

Steps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Steps;
