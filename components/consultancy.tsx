/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Component from "./component";
import styles from "./consultancy.module.css";

export type ConsultancyType = {
  className?: string;
};

const Consultancy: NextPage<ConsultancyType> = ({ className = "" }) => {
  return (
    <section className={[styles.consultancy, className].join(" ")}>
      <div className={styles.consultancyContent}>
        <div className={styles.consultancyTitle}>
          <div className={styles.consultancyHeading}>
            <div className={styles.consultancyLogo}>
              <div className={styles.logoContainer}>
                <div className={styles.aidit}>AIDIT</div>
                <div className={styles.consultancyDescription}>
                  <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionContent}>
                      <h1 className={styles.strategicItConsultancyContainer}>
                        <span
                          className={styles.strategicItConsultancyContainer1}
                        >
                          <p className={styles.strategicItConsultancy}>
                            Strategic IT Consultancy with
                          </p>
                          <p className={styles.aiExpertise}>AI expertise</p>
                        </span>
                      </h1>
                      <div className={styles.artificialIntelligenceFor}>
                        Artificial intelligence for a seamless digital
                        transformation ensuring efficiency, agility, and a
                        future-ready approach.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.bg} />
                    <a className={styles.learnMore}>LEARN MORE</a>
                    <div className={styles.vectorWrapper}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.businessSuccess}>
                <div className={styles.successContainer}>
                  <div className={styles.successContent}>
                    <div className={styles.successImageParent}>
                      <div className={styles.successImage} />
                      <div className={styles.successDescription}>
                        <div className={styles.descriptionWrapper}>
                          <div className={styles.vectorParent}>
                            <img
                              className={styles.frameChild}
                              alt=""
                              src="/group-1707478897.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.aiEnablesBusinessContainer}>
                          <p className={styles.aiEnablesBusiness}>
                            AI Enables Business
                          </p>
                          <p className={styles.success}>success</p>
                        </div>
                      </div>
                      <div className={styles.businessBenefits}>
                        <div className={styles.benefitCards}>
                          <div className={styles.benefitCardItems}>
                            <div className={styles.benefitImages} />
                          </div>
                          <div className={styles.benefitBackground} />
                          <div className={styles.benefitCardItems1}>
                            <div className={styles.benefitCardItemsChild} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.rectangleParent}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/rectangle-700@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.valueHeading}>
              <h1 className={styles.whatValueHas}>What value has it added?</h1>
            </div>
          </div>
          <div className={styles.valueBenefits}>
            <Component />
            <div className={styles.div}>
              {/* <div className={styles.child} /> */}
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
              <div className={styles.intelligentDecisionMaking}>
                Intelligent decision-making
              </div>
            </div>
            <Component />
          </div>
          <div className={styles.decisionMaking}>
            <div className={styles.intelligentDecisionMaking1}>
              Intelligent decision-making
            </div>
            <div className={styles.decisionIcon}>
              <div className={styles.iconBackgroundShape} />
              <img className={styles.vectorIcon3} alt="" src="/vector-6.svg" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Consultancy;
