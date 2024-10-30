import React from 'react'
import classNames from 'classnames'
import styles from '../../style/employee/Injury.module.css'
import commonStyles from '../../style/Common.module.css'
import Categorys from '../../component/Categorys'
import sec3Icon1 from '../../assets/img/employee/injury003.png'
import sec3Icon2 from '../../assets/img/employee/injury004.png'
import sec3Icon3 from '../../assets/img/employee/injury005.png'
import sec3Icon4 from '../../assets/img/employee/injury006.png'
import sec3Icon5 from '../../assets/img/employee/injury007.png'
import sec3Icon6 from '../../assets/img/employee/injury008.png'
import sec3Icon7 from '../../assets/img/employee/injury009.png'
import graph from '../../assets/img/employee/injury010.png'
import { motion } from 'framer-motion';

const Injury = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>‘여러분의 가치를 소중하게 보호’</span> 하는 노무법인 <span>이음</span>
                </p>
                <p className={styles.description}>
                    일하다 얻은 신체적인 손상에 대한 보상 받을 수 있게 도와 드립니다.
                </p>
            </div>
            <Categorys url='injury' />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <div className={styles.contentContainer}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1,
                            delay: 0.5
                        }}
                        className={styles.img}
                    ></motion.div>
                    <div className={styles.text}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 1
                            }}
                        >
                            <p className={styles.title}>
                                <span>산업 재해 사건</span>이란?
                            </p>
                            <div className={styles.description}>
                                <p>근로자가 업무상 사고 또는 질병으로 부상, 질병, 장해가 발생하거나,</p>
                                <p>사망하면 업무상 재해로 봅니다. 업무상 재해를 당한 근로자가</p>
                                <p>일정한 요건을 갖추면 요양급여 등 보험급여를 받을 수 있습니다.</p>
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
                        >
                            <p className={styles.title}>
                                산업 재해 사건 <span>적용 범위</span>
                            </p>
                            <div className={styles.description}>
                                <p>근로자를 사용하는 모든 사업 또는 사업장에  적용됩니다.</p>
                                <p>산업 재해 보상 보험은 의무 가입으로 4대 보험 가입 여부를 불문하고</p>
                                <p>모든 근로자에게 적용됩니다.</p>
                                <p>(단, 개별 법령에서 별도로 재해보상을 행하거나 일부 업종의 경우에는 적용 제외)</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
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
                        주요 산업 재해 <span>보상 보험 급여 종류</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.typeContainer}
                    >
                        <div className={styles.type}>
                            <img src={sec3Icon1} alt='요양 급여 아이콘' />
                            <p>요양 급여</p>
                        </div>
                        <div className={styles.type}>
                            <img src={sec3Icon2} alt='휴업 급여 아이콘' />
                            <p>휴업 급여</p>
                        </div>
                        <div className={styles.type}>
                            <img src={sec3Icon3} alt='장해 급여 아이콘' />
                            <p>장해 급여</p>
                        </div>
                        <div className={styles.type}>
                            <img src={sec3Icon4} alt='간병 급여 아이콘' />
                            <p>간병 급여</p>
                        </div>
                        <div className={styles.type}>
                            <img src={sec3Icon5} alt='유족 급여 아이콘' />
                            <p>유족 급여</p>
                        </div>
                        <div className={styles.type}>
                            <img src={sec3Icon6} alt='상병 보상 연금 아이콘' />
                            <p>상병 보상 연금</p>
                        </div>
                        <div className={styles.type}>
                            <img src={sec3Icon7} alt='장의비 아이콘' />
                            <p>장의비</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={styles.sec4}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                    className={styles.title}
                >
                    산업 재해 <span>보상 처리절차</span>
                </motion.div>
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
        </div>
    )
}

export default Injury