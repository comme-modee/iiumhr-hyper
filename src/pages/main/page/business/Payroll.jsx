import React from 'react'
import styles from '../../style/business/Payroll.module.css'
import commonStyles from '../../style/Common.module.css'
import classNames from 'classnames'
import Categorys from '../../component/Categorys'
import img1 from '../../assets/img/business/payroll002.png'
import img2 from '../../assets/img/business/payroll003.png'

const Payroll = () => {
    return (
        <div>
            <div className={classNames(styles.sec1, commonStyles.flexCenter)}>
                <p className={styles.title}>
                    <span>사업자</span> 분들의 <span>‘최고의 파트너’</span> 노무법인 <span>이음</span><br />
                </p>
                <p className={styles.description}>
                    상호 원만한 협력을 이끌어 낼 수 있는 최적의 프로그램을 제시하고 있습니다.
                </p>
            </div>
            <Categorys url={'payroll'} />
            <div className={classNames(styles.sec2, commonStyles.layout)}>
                <img src={img1} alt='' />
                <p className={styles.title}><span>급여관리</span>란?</p>
                <p className={styles.description}>
                    급여업무대행서비스로, 기업 내 인사, 회계팀에서 직접 운영하는 급여 업무<br />
                    (급여계산, 4대보험관리, 퇴직금 계산 등)를 전문성을 가진 노무법인에 위탁하여 운영하는 서비스
                </p>
            </div>
            <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <p className={styles.title}>급여관리 <span>서비스 프로세스</span></p>
                    <div className={styles.process}>
                        <div className={styles.box}>
                            <p>
                                인사, 급여 기초자료 및<br />
                                근태자료 발송
                            </p>
                            <p>회사</p>
                        </div>
                        <div className={styles.box}>
                            <p>
                                관련 법률 검토 후<br />
                                급여 데이터화 작업<br />
                                및 명세서 작성
                            </p>
                            <p>노무법인 이음</p>
                        </div>
                        <div className={styles.box}>
                            <p>
                                급여 이체 및<br />
                                명세서 발송
                            </p>
                            <p>회사</p>
                        </div>
                        <div className={styles.box}>
                            <p>
                                관련 4대보험 신고 등<br />
                                사후관리
                            </p>
                            <p>노무법인 이음</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.sec4, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <p className={styles.title}>노무법인 이음과 <span>함께 한다면?</span></p>
                    <div className={styles.box}>
                        <img src={img2} alt='' />
                        <ul>
                            <li>① 회사의 급여관리 관련 <span>업무전문성 강화</span></li>
                            <li>② 급여 관련 <span>노무리스크 최소화</span></li>
                            <li>③ 직접관리 대비 <span>비용 절감</span> 효과</li>
                            <li>④ 기업 본연의 <span>전문성 강화</span> 가능</li>
                            <li>⑤ 제3자에 위탁함으로써 <span>급여 비밀유지</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payroll