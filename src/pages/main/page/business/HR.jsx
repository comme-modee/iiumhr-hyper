import React from 'react'
import styles from '../../style/business/HR.module.css'
import commonStyles from '../../style/Common.module.css'
import classNames from 'classnames'
import Categorys from '../../component/Categorys'
import sec2Img from '../../assets/img/business/hr002.png'
import sec4Img1 from '../../assets/img/business/hr005.png'
import sec4Img2 from '../../assets/img/business/hr006.png'
import sec4Img3 from '../../assets/img/business/hr007.png'
import sec4Img4 from '../../assets/img/business/hr008.png'
import { motion } from 'framer-motion';

const HR = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>사업자</span> 분들의 <span>‘최고의 파트너’</span> 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    체계적인 프로세스를 기반으로 효율적인 서비스를 제공합니다.
                </p>
            </div>
            <Categorys url={'hr'} />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.title}
                >
                    HR 컨설팅 서비스 <span>프로세스</span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.process}
                >
                    <div className={styles.box}>
                        <p>STEP 1</p>
                        <p>통합진단</p>
                        <p>
                            노무법인 이음의 통합 진단 툴을<br />
                            활용하여 HR 컨설팅의 필요 영역 진단
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>STEP 2</p>
                        <p>현황분석</p>
                        <p>
                            기업의 HR 컨설팅 영역과 관련된<br />
                            운영 실태와 현재 상황을 면밀히 분석
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>STEP 3</p>
                        <p>개선방향 수립</p>
                        <p>
                            현황 분석 결과를 바탕으로 현 상황을<br />
                            개선할 수 있도록 개선 방향을 수립
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>STEP 4</p>
                        <p>제도설계</p>
                        <p>
                            기업의 인사 관리 방향성과 현행 노동 관계<br />
                            법령을 고려하여 맞춤형 HR 제도 설계
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>STEP 5</p>
                        <p>최종보고</p>
                        <p>
                            제도 설계안에 대하여 경영진과<br />
                            직원들에게 설명회 진행
                        </p>
                    </div>
                    <div className={styles.box}>
                        <p>STEP 6</p>
                        <p>사후관리</p>
                        <p>
                            제도 운영 시 발생하게 되는<br />
                            제반 노무 이슈에 대한 대응을 통하여<br />
                            안정적으로 제도가 안착될 수 있도록 지원
                        </p>
                    </div>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    src={sec2Img}
                    alt=''
                ></motion.img>
            </div>
            <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.title}
                    >
                        HR 컨설팅 서비스가 <span>필요한 업무 영역</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.contentContainer}
                    >
                        <div className={styles.row}>
                            <p>임금체계 개편</p>
                            <p>평가보상제도 설계</p>
                            <p>임금피크제 설계</p>
                        </div>
                        <div className={styles.row}>
                            <p>근로시간 개편</p>
                            <p>인사관리 적법성 진단</p>
                        </div>
                        <div className={styles.row}>
                            <div>
                                <div className={styles.img}></div>
                                <p>하도급 체계 개편</p>
                            </div>
                            <div>
                                <p>저성과자 관리체계 설계</p>
                                <div className={styles.img}></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.title}
                    >
                        HR 컨설팅 서비스의 <span>기대효과</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.boxContainer}
                    >
                        <div>
                            <p>01</p>
                            <p>
                                기업의 인사 관리<br />
                                방향성에 부합하는<br />
                                인사제도 구축
                            </p>
                            <img src={sec4Img1} alt='' />
                        </div>
                        <div>
                            <p>02</p>
                            <p>
                                최근 인사관리 트렌드를<br />
                                반영한 합리적인<br />
                                인사제도 도입
                            </p>
                            <img src={sec4Img2} alt='' />
                        </div>
                        <div>
                            <p>03</p>
                            <p>
                                노동 관계법령에<br />
                                부합하는<br />
                                인사제도 구축
                            </p>
                            <img src={sec4Img3} alt='' />
                        </div>
                        <div>
                            <p>04</p>
                            <p>
                                인사제도 도입 관련<br />
                                기업의 조직적<br />
                                역량 제고
                            </p>
                            <img src={sec4Img4} alt='' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HR