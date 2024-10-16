import classNames from 'classnames'
import React from 'react'
import styles from '../../style/business/Advisory.module.css'
import commonStyles from '../../style/Common.module.css'
import Categorys from '../../component/Categorys'
import Img1 from '../../assets/img/business/advisory002.png'
import Img2 from '../../assets/img/business/advisory003.png'
import { motion } from 'framer-motion';

const Advisory = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>사업자</span> 분들의 <span>‘최고의 파트너’</span> 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    기업의 노무 관리 역량을 강화하여 안정적인 사업 운영을 도와 드립니다.
                </p>
            </div>
            <Categorys url={'advisory'} />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1
                    }}
                >
                    <img src={Img1} alt='' />
                    <div className={styles.content}>
                        <p>노무 서비스가 필요한 기업은?</p>
                        <ul>
                            <li>
                                <div>①</div>
                                <div>노동사건이 빈번히 발생하는 기업</div>
                            </li>
                            <li>
                                <div>②</div>
                                <div>노동관계법령에 대한 체계적인 이해가 어려운 기업</div>
                            </li>
                            <li>
                                <div>③</div>
                                <div>근로계약서, 취업규칙이 없어 타사 기준을 그대로 사용하는 기업</div>
                            </li>
                            <li>
                                <div>④</div>
                                <div>임금체계에 대한 법적, 인사관리적 검토 과정 없이 임금 체계를 운영하는 기업</div>
                            </li>
                            <li>
                                <div>⑤</div>
                                <div>노동조합이 있는 기업</div>
                            </li>
                        </ul>
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
                    <div className={styles.content}>
                        <p>노무법인 이음과 함께 한다면?</p>
                        <ul>
                            <li>
                                <div>①</div>
                                <div><span>적법한</span> 인사관리를 통해 노동관련 <span>분쟁 예방</span></div>
                            </li>
                            <li>
                                <div>②</div>
                                <div>기업의 인사관리 <span>방향성에 부합</span>하는 <span>노무 관리</span></div>
                            </li>
                            <li>
                                <div>③</div>
                                <div>기업의 <span>노무 관리 역량 강화</span></div>
                            </li>
                            <li>
                                <div>④</div>
                                <div>노동관련 분쟁의 <span>신속한 대응</span></div>
                            </li>
                            <li>
                                <div>⑤</div>
                                <div><span>안정적인</span> 사업 운영 가능</div>
                            </li>
                        </ul>
                    </div>
                    <img src={Img2} alt='' />
                </motion.div>
            </div>
        </div>
    )
}

export default Advisory