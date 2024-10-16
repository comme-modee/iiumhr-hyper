import classNames from 'classnames'
import React from 'react'
import styles from '../../style/employee/Dismissal.module.css'
import commonStyles from '../../style/Common.module.css'
import Categorys from '../../component/Categorys'
import sec2Img1 from '../../assets/img/employee/dismissal002.png'
import sec2Img2 from '../../assets/img/employee/dismissal003.png'
import sec2Img3 from '../../assets/img/employee/dismissal004.png'
import { motion } from 'framer-motion';

const Dismissal = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>‘여러분의 가치를 소중하게 보호’</span> 하는 노무법인 <span>이음</span>
                </p>
                <p className={styles.description}>
                    정당한 이유 없는 부당한 인사 관리 구제 신청을 통해 회복할 수 있습니다.
                </p>
            </div>
            <Categorys url='dismissal' />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <div className={styles.boxContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.box}
                    >
                        <p><span>부당해고/징계</span> 사건이란?</p>
                        <p>
                            사용자로부터 정당한 이유 없이 해고, 휴직, 정직, 전직, 감봉, 기타 징벌을 당한 근로자는<br />
                            관할 지방 노동 위원회에 부당해고 등의 구제 신청을 할 수 있습니다.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.row}
                    >
                        <div className={styles.interview}>
                            <img src={sec2Img1} alt='' />
                            <p>
                                오늘 아침 정확한 이유도 듣지 못하고<br />
                                갑작스럽게 해고를 당했어요.
                                <span>”</span>
                            </p>
                        </div>
                        <div className={styles.interview}>
                            <img src={sec2Img2} alt='' />
                            <p>
                                열심히 일을 잘 하고 있었는데<br />
                                정당한 이유 없이 감봉을 당했어요.
                                <span>”</span>
                            </p>
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
                        className={styles.box}
                    >
                        <div className={styles.img}><img src={sec2Img3} alt='' /></div>
                        <div>
                            <p>부당해고/징계 <span>사건 대상</span></p>
                            <ul>
                                <li>① 해고가 정당한 사유 없이 이루어진 경우</li>
                                <li>② 경영상 이유에 의한 해고 제한 요건을 갖추지 않은 경우</li>
                                <li>③ 노동 관계 법령에서 정하고 있는 특정한 해고 금지 사유를 위반하여 해고한 경우</li>
                                <li>④ 해고할 만한 사유가 아님에도 징계 양정을 과도하게 하여 해고한 경우</li>
                                <li>⑤ 법령 또는 단체 협약, 취업 규칙에서 정한 해고 절차를 위반하여 해고한 경우 </li>
                                <li>⑥ 해고할 수 없는 시기에 해고를 한 경우</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
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
                기본적인 권리, 노무법인 이음이 함께 지켜드립니다.
            </motion.div>
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
                        부당해고 <span>구제 신청 처리 절차</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1
                        }}
                        className={styles.graph}
                    >
                        <div className={styles.step1}>
                            <p>부당해고</p>
                            <p>지방노동위원회구제신청</p>
                            <p>사실조사·심문·판정</p>
                            <div className={styles.leftLine}></div>
                            <div className={styles.rightLine}></div>
                        </div>
                        <div className={styles.step2}>
                            <div>
                                <p>구제명령</p>
                                <p>원상회복</p>
                            </div>
                            <div>
                                <p>기각·각하</p>
                                <p>중앙노동위원회재심</p>
                                <div className={styles.leftLine}></div>
                                <div className={styles.rightLine}></div>
                                <div className={styles.step3}>
                                    <div>
                                        <p>구제명령</p>
                                        <p>원상회복</p>
                                    </div>
                                    <div>
                                        <p>기각·각하</p>
                                        <p>행정소송</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Dismissal