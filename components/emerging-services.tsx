/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import GroupComponent from "./group-component";
import styles from "./emerging-services.module.css";

export type EmergingServicesType = {
  className?: string;
};

const EmergingServices: NextPage<EmergingServicesType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.emergingServices, className].join(" ")}>
      <div className={styles.emergingServicesContent}>
        <div className={styles.emergingServicesContentChild} />
        <div className={styles.emergingServicesTitle}>
          <div className={styles.emergingServicesHeading}>
            <h1 className={styles.ourEmergingServices}>
              Our Emerging Services
            </h1>
            <div className={styles.emergingDescription}>
              <div className={styles.seamlessIntegrationFor}>
                Seamless Integration for a Future Defined by Efficiency,
                Security, and Digital Excellence
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesCloud}>
          <GroupComponent
            ellipse271="/ellipse-271.svg"
            cloudService="Cloud Service"
            scalableBusinessCentricSo="Scalable, Business-Centric solutions, enabling you to spearhead innovation, bolster agility, and optimize operational costs."
          />

          <div className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-1.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>Strategic Advisory</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Optimize operational efficiency, and maintain a
                  competitive edge in the ever evolving digital landscape.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-2.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>IT Infrastructure</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Redefine the future of infrastructure, ensuring unparalleled
                  reliability, efficiency, and technological advancement.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-3.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>Cybersecurity</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Secure your data, applications, and reputation, providing you the assurance to navigate the digital realm securely.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-4.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>AI & ML</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Optimize operational efficiency, automate intricate tasks, and furnish actionable insights, empowering.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-271-5.svg"
            />
            <div className={styles.itInfrastructureWrapper}>
              <h1 className={styles.itInfrastructure}>Hyper Automation</h1>
            </div>
            <div className={styles.redefineContentWrapper}>
              <div className={styles.redefineContent}>
                <div className={styles.redefineTheFuture}>
                  Experience manual tasks transform into automated brilliance, driving enhanced efficiency, substantial cost savings.
                </div>
                <div className={styles.learnMore1}>Learn more</div>
              </div>
            </div>
          </div>
          {/* <GroupComponent
            ellipse271="/ellipse-271-3.svg"
            cloudService="Cybersecurity"
            scalableBusinessCentricSo=""
          propBorder="0.8px solid var(--color-gainsboro-200)"
          propPadding="var(--padding-2xl) var(--padding-xl) var(--padding-15xl) var(--padding-2xl)"
          propBoxShadow="unset"
          propBorder1="0.8px solid var(--color-gainsboro-200)"
          propBoxShadow1="unset"
          propGap="48.2px"
          propGap1="23.8px"
          /> */}
          {/* <GroupComponent
            ellipse271="/ellipse-271-4.svg"
            cloudService={`AI & ML`}
            scalableBusinessCentricSo=""
          propBorder="unset"
          propPadding="var(--padding-3xl-7) var(--padding-2xl) var(--padding-16xl-6) var(--padding-3xl)"
          propBoxShadow="0px 43.3px 97.35px -32.45px rgba(24, 39, 75, 0.12), 0px 64.9px 227.14px -21.63px rgba(24, 39, 75, 0.12)"
          propBorder1="unset"
          propBoxShadow1="0px 43.3px 97.35px -32.45px rgba(24, 39, 75, 0.12), 0px 64.9px 227.14px -21.63px rgba(24, 39, 75, 0.12)"
          propGap="41.2px"
          propGap1="9.8px"
          />
          <GroupComponent
            ellipse271="/ellipse-271-5.svg"
            cloudService="Hyper Automation"
            scalableBusinessCentricSo=""
          propBorder="0.8px solid var(--color-gainsboro-200)"
          propPadding="var(--padding-2xl) var(--padding-xl) var(--padding-15xl) var(--padding-2xl)"
          propBoxShadow="unset"
          propBorder1="0.8px solid var(--color-gainsboro-200)"
          propBoxShadow1="unset"
          propGap="41.2px"
          propGap1="9.8px"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default EmergingServices;
