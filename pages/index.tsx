/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Main from "../components/main";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Accomplishments from "../components/accomplishments";
import EmergingServices from "../components/emerging-services";
import Consultancy from "../components/consultancy";
import ChooseUs from "../components/choose-us";
import FrameComponent from "../components/frame-component";
import NewsHeader from "../components/news-header";
import NewsGrid from "../components/news-grid";
import BusinessGrowth from "../components/business-growth";
import DivcCPVDp1 from "../components/divc-c-p-v-dp1";
import DivcCPVDp from "../components/divc-c-p-v-dp";
import styles from "./index.module.css";
const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Main />
      <FrameComponent2 />
      <FrameComponent1 />
      <Accomplishments />
      <EmergingServices />
      <Consultancy />
      <ChooseUs />
      <div className={styles.homeInner} />
      <div className={styles.titleAndDescription} />
      <FrameComponent />
      <img
        className={styles.representationUserExperienceIcon}
        alt=""
        src="/representationuserexperienceinterfacedesign-3-2@2x.png"
      />
      <section className={styles.newsContainerWrapper}>
        <div className={styles.newsContainer}>
          <NewsHeader />
          <NewsGrid />
        </div>
      </section>
      <BusinessGrowth />
      <section className={styles.footer}>
        <DivcCPVDp1 />
        <DivcCPVDp />
      </section>
    </div>
  );
};
export default Home;
