import React from 'react'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from '../../style/employee/Wages.module.css'
import commonStyles from '../../style/Common.module.css'
import Categorys from '../../component/Categorys'
import sec6Icon1 from '../../assets/img/employee/wages004.png'
import sec6Icon2 from '../../assets/img/employee/wages005.png'
import sec6Icon3 from '../../assets/img/employee/wages006.png'
import graph from '../../assets/img/employee/wages007.png'
import { motion } from 'framer-motion';
import sdfap from '@/common/api/sdfap'

const Wages = () => {
    const [ sdfapData, setSdfapData ] = useState({});

    const getSdfapData = async () => {
        try {
            const res = await sdfap.getSdfap();
            setSdfapData(res.list)
        } catch (error) {
            console.log('error: ', error)
        }
    }

    useEffect(() => {
        getSdfapData(); 
    },[])

    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>‘여러분의 가치를 소중하게 보호’</span> 하는 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    임금을 제대로 받지 못했을 때 법과 제도적으로 받을 수 있습니다.
                </p>
            </div>
            <Categorys url={'wages'} />
            <div className={styles.sec2}>
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
                    <span>임금체불</span>이란?
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.description}
                >
                    임금을 지급 받지 못한 근로자는 밀린 임금을 지급 받을 수 있도록 해달라고<br />
                    요구(진정)하거나, 사용자를 근로기준법 위반으로 처벌해 달라고 요구(고소)할 수 있습니다.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1
                }}
                className={classNames(styles.sec3, commonStyles.flexCenter)}
            >
                <p>
                    노무법인 이음이 여러분 곁에 서서<br />
                    함께 헤쳐 나가겠습니다.
                </p>
            </motion.div>
            <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
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
                    임금체불 <span>사건 처리 절차</span>
                </motion.p>
                <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={commonStyles.layout}
                    src={graph}
                    alt='그래프'
                />
            </div>
            <div className={classNames(styles.sec5, commonStyles.layout)}>
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
                    <span>대지급금 제도</span>란?
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.description}
                >
                    기업의 도산 등으로 인하여 사업을 계속하는 것이 불가능하거나 기업의 경영이 불안정하여,<br />
                    임금 등을 지급받지 못하고 퇴직한 근로자에게 그 지급을 보장하는 제도
                </motion.div>
            </div>
            <div className={classNames(styles.sec6, commonStyles.layout)}>
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
                    체당금 <span>지급 사유</span> (기업의 도산)
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
                    <div className={styles.content}>
                        <div>
                            <div className={styles.icon}>
                                <img src={sec6Icon1} alt='' />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.title}>사실상 도산</p>
                                <p className={styles.description}>
                                    지방 고용 노동 관서장이 300인 이하
                                    사업장에 대하여 인정한 경우
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.icon}>
                                <img src={sec6Icon2} alt='' />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.title}>재판상 도산</p>
                                <p className={styles.description}>
                                    법원이 파산 선고,<br />
                                    회생 절차 개시 결정을 한 경우
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.icon}>
                                <img src={sec6Icon3} alt='' />
                            </div>
                            <div className={styles.text}>
                                <p className={styles.description}>
                                    그 외 임금체불에 대한 판결, 명령,<br />
                                    또는 결정 등이 있는 경우
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.img}></div>
                </motion.div>
            </div>
            <div className={classNames(styles.sec7, commonStyles.layout)}>
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
                    체당금 <span>월정상한액 [24년 기준]</span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.table1}
                >
                    <div className={styles.header}>
                        <div>
                            <p>(도산대지급금) 구.일반체당금</p>
                            <span></span>
                        </div>
                        <p>(단위:만 원)</p>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <p>항목</p>
                            <span></span>
                            <p>퇴직당시<br />연령</p>
                        </div>
                        <p>30세 미만</p>
                        <p>30세 이상<br />40세 미만</p>
                        <p>40세 이상<br />50세 미만</p>
                        <p>50세 이상<br />60세 미만</p>
                        <p>60세 이상</p>
                    </div>
                    <div className={styles.row}>
                        <p>임<span></span>금</p>
                        <p>{sdfapData?.i1}</p>
                        <p>{sdfapData?.i2}</p>
                        <p>{sdfapData?.i3}</p>
                        <p>{sdfapData?.i4}</p>
                        <p>{sdfapData?.i5}</p>
                    </div>
                    <div className={styles.row}>
                        <p>퇴직급여등</p>
                        <p>{sdfapData?.t1}</p>
                        <p>{sdfapData?.t2}</p>
                        <p>{sdfapData?.t3}</p>
                        <p>{sdfapData?.t4}</p>
                        <p>{sdfapData?.t5}</p>
                    </div>
                    <div className={styles.row}>
                        <p>휴 &nbsp;업 &nbsp;수 &nbsp;당</p>
                        <p>{sdfapData?.h1}</p>
                        <p>{sdfapData?.h2}</p>
                        <p>{sdfapData?.h3}</p>
                        <p>{sdfapData?.h4}</p>
                        <p>{sdfapData?.h5}</p>
                    </div>
                    <div className={styles.row}>
                        <p>출산후 휴가기간 중 급여</p>
                        <p>{sdfapData?.e1}</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.table2}
                >
                    <div className={styles.header}>
                        <div>
                            <p>(간이대지급금) 구.소액체당금</p>
                            <span></span>
                        </div>
                        <p>(단위:만 원)</p>
                    </div>
                    <div className={styles.row}>
                        <p>항<span></span>목</p>
                        <p>상한액</p>
                    </div>
                    <div className={styles.row}>
                        <p>임금, 출산전후휴가기간 중 급여, 휴업수당</p>
                        <p>{sdfapData?.slp1}</p>
                    </div>
                    <div className={styles.row}>
                        <p>퇴직급여등</p>
                        <p>{sdfapData?.slp2}</p>
                    </div>
                    <div>* 총 상한액은 1,000만 원</div>
                </motion.div>
            </div>
        </div>
    )
}

export default Wages