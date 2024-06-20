/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Testimonial from "./testimonial";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.careTeamWrapper, className].join(" ")}>
      <div className={styles.careTeam}>
        <div className={styles.careTeamChild} />
        <div className={styles.lovedTeam}>
          <div className={styles.peopleTechParent}>
            <div className={styles.peopleTech}>
              <div className={styles.lovedImage}>
                <div className={styles.lovedByPeopleParent}>
                  <h1 className={styles.lovedByPeople}>Loved by people</h1>
                  <div className={styles.techImage}>
                    <img
                      className={styles.filtersformatwebpIcon}
                      loading="lazy"
                      alt=""
                      src="/filtersformatwebp@2x.png"
                    />
                  </div>
                  <h1 className={styles.andTechnology}>and Technology</h1>
                </div>
              </div>
              <div className={styles.businessTeam}>
                <h1 className={styles.teamsThat}>teams that</h1>
                <div className={styles.teamImage}>
                  <img
                    className={styles.filtersformatwebpIcon1}
                    alt=""
                    src="/filtersformatwebp-1@2x.png"
                  />
                </div>
                <h1 className={styles.careAboutBusiness}>
                  care about business
                </h1>
              </div>
            </div>
            <div className={styles.testimonialList}>
              <div className={styles.spancDbpoic}>
                <div className={styles.testimonials}>Testimonials</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialCarousel}>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonial}>
              <div className={styles.bestExperienceOfClassesClParent}>
                <div className={styles.bestExperienceOf}>
                  Best experience of classes, clearly understanding of concepts
                  of Banking Course and The Teachers are very friendly with the
                  students and there you get course classes and doubt session
                  classes. There are many bank coaching in Karnataka but Aanand
                  academy is one of the best banking coaching for banking
                  aspirant in Karnataka. Its library is open for 24×7 so its
                  very useful for any banking student. Teachers here are amazing
                  they give one to one attention to each and every student and
                  help in conceptual understanding. They also provide regular
                  series of class test and also conduct mock tests to keep a
                  check on our preparation for the exam
                </div>
                <div className={styles.info} />
              </div>
              <div className={styles.userContainer}>
                <div className={styles.user}>
                  <div className={styles.userImage}>
                    <img
                      className={styles.avatarIcon}
                      loading="lazy"
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.userName}>
                      <div className={styles.annetteBlack}>Annette Black</div>
                      <div className={styles.caAspirant}>CA Aspirant</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.googleRating}>
                    <img
                      className={styles.googleLogo98081Icon}
                      alt=""
                      src="/googlelogo9808-1@2x.png"
                    />
                  </div>
                  <div className={styles.emptyRating}>
                    <div className={styles.empty}>4.8</div>
                    <div className={styles.starRating}>
                      <img className={styles.fsvgIcon} alt="" src="/fsvg.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Testimonial
              oneOfTheBestCoachingClass="One of the best coaching classes for CA foundation in hubli. Teachers here are amazing they give one to one attention to each and every student and help in conceptual understanding. They also provide regular series of class test and also conduct mock tests to keep a check on our preparation for the exam."
              avatar="/avatar-1@2x.png"
              sONALMADAN="SONAL MADAN"
              cAAspirant="CA Aspirant"
            />
          </div>
          <div className={styles.thirdTestimonial}>
            <Testimonial
              oneOfTheBestCoachingClass="An appropriate place for banking/ssc aspirants where you will be made to invest your valuable time and effort to reach your goal. Quality of teaching is excellent and faculties are expertise in respective subjects. Additional facilities like lab and study room are provided. Overall best environment to study."
              avatar="/avatar-2@2x.png"
              sONALMADAN="Harsha Aladi"
              cAAspirant="Swift Pvt. Ltd."
              propPadding="var(--padding-12xl) var(--padding-15xl) var(--padding-10xl)"
              propTextTransform="unset"
              propMinWidth="5.063rem"
              propMinWidth1="4.063rem"
            />
            <div className={styles.testimonial1}>
              <div className={styles.bestExperienceOf1}>
                Best experience of classes, clearly understanding of concepts of
                CA Foundation Course and The Teachers are very friendly with the
                students and there you get course classes and Double Rivision
                classes and Doubt session classes.
              </div>
              <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon1}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.gnanendraPatangeParent}>
                      <div className={styles.gnanendraPatange}>
                        GNANENDRA PATANGE
                      </div>
                      <div className={styles.caAspirant1}>CA Aspirant</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.googleLogo98081Wrapper}>
                    <img
                      className={styles.googleLogo98081Icon1}
                      alt=""
                      src="/googlelogo9808-1@2x.png"
                    />
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div}>4.8</div>
                    <div className={styles.fsvgWrapper}>
                      <img
                        className={styles.fsvgIcon1}
                        alt=""
                        src="/fsvg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Testimonial
              oneOfTheBestCoachingClass="This place is one of the best academy for ca foundation i must say, teachers here are the best who help with conceptual understanding and also give personalised attention. They also provide a series of mock test which helps in excelling in accuracy."
              avatar="/avatar-4@2x.png"
              sONALMADAN="Bhumika Shaldar"
              cAAspirant="CA Aspirant"
              propPadding="var(--padding-11xl) var(--padding-15xl)"
              propTextTransform="unset"
              propMinWidth="6.75rem"
              propMinWidth1="3.5rem"
            />
          </div>
          <div className={styles.fourthTestimonial}>
            <div className={styles.testimonial2}>
              <div className={styles.info1} />
              <div className={styles.anandAcademyIs}>
                Anand Academy is the best coaching institute for BANKING and
                SSC. The institute has best knowledgeable teaching faculty.
                Computer lab and library 24×7 which is very useful for
                aspirants. and the academy also conduct regular test series of
                class and mock test.
              </div>
              <div className={styles.userContainer1}>
                <div className={styles.user1}>
                  <div className={styles.userImage1}>
                    <img
                      className={styles.avatarIcon2}
                      alt=""
                      src="/avatar-5@2x.png"
                    />
                    <div className={styles.userName1}>
                      <div className={styles.vijiyaViji}>Vijiya Viji</div>
                      <div className={styles.caAspirant2}>CA Aspirant</div>
                    </div>
                  </div>
                </div>
                <div className={styles.rating1}>
                  <div className={styles.googleRating1}>
                    <img
                      className={styles.googleLogo98081Icon2}
                      alt=""
                      src="/googlelogo9808-1@2x.png"
                    />
                  </div>
                  <div className={styles.emptyRating1}>
                    <div className={styles.empty1}>4.8</div>
                    <div className={styles.fsvgContainer}>
                      <img
                        className={styles.fsvgIcon2}
                        alt=""
                        src="/fsvg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.testimonial3}>
              <div className={styles.testimonialContent}>
                <div className={styles.iAttendedAContainer}>
                  <p className={styles.iAttendedA}>
                    I attended a chartered accountancy coaching class at Anand
                    Academy for foundation, and I found it to be an excellent
                    learning experience. The Acedamy is well-equipped with
                    modern facilities, including spacious classrooms,
                    comfortable seating arrangements, and the latest teaching
                    technology.
                  </p>
                  <p className={styles.iWouldHighly}>
                    I would highly recommend Anand Academy to anyone looking for
                    quality chartered accountancy coaching. The fees were
                    reasonable, and I feel like I received excellent value for
                    my investment. I am confident that the skills and knowledge
                    I gained during my time at the institute will help me
                    achieve my career goals.
                  </p>
                </div>
                <div className={styles.info2} />
              </div>
              <div className={styles.testimonialUser}>
                <div className={styles.userImageContainerWrapper}>
                  <div className={styles.userImageContainer}>
                    <img
                      className={styles.avatarIcon3}
                      alt=""
                      src="/avatar-4@2x.png"
                    />
                    <div className={styles.userCredentials}>
                      <div className={styles.bhumikaShaldar}>
                        Bhumika Shaldar
                      </div>
                      <div className={styles.caAspirant3}>CA Aspirant</div>
                    </div>
                  </div>
                </div>
                <div className={styles.platformLogoContainerParent}>
                  <div className={styles.platformLogoContainer}>
                    <img
                      className={styles.googleLogo98081Icon3}
                      alt=""
                      src="/googlelogo9808-1@2x.png"
                    />
                  </div>
                  <div className={styles.reviewSeparator}>
                    <div className={styles.div1}>4.8</div>
                    <div className={styles.reviewRating}>
                      <img
                        className={styles.fsvgIcon3}
                        alt=""
                        src="/fsvg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
