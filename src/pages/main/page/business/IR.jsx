import React from 'react'
import styles from '../../style/business/IR.module.css'
import commonStyles from '../../style/Common.module.css'
import classNames from 'classnames'
import Categorys from '../../component/Categorys'
import img from '../../assets/img/business/ir002.png'

const IR = () => {
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
            <Categorys url={'ir'} />
            <div className={classNames(styles.sec2, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <p className={styles.title}>IR 컨설팅 서비스가 <span>필요한 업무 영역</span></p>
                    <div className={styles.boxContainer}>
                        <div className={styles.box}>
                            <p>노사 관계 진단 및 전략 수립</p>
                            <p>
                                조직 진단을 통합 현안 및 문제점 분석<br />
                                문제점 개선을 위한 프로그램 구축 및 실행
                            </p>
                        </div>
                        <div className={styles.box}>
                            <p>노사협의회 설치</p>
                            <p>
                                노동 관계 법령에 따른 노사협의회 설치<br />
                                노사협의회를 통한 노사 협력 수준 제고 방안 수립
                            </p>
                        </div>
                        <div className={styles.box}>
                            <p>구조조정 컨설팅</p>
                            <p>
                                적법한 구조조정 가능 여부 사전 검토<br />
                                구조조정 계획 수립 및 진행<br />
                                해고 및 인사 이동 등에 대한 향후 노동사건 대응
                            </p>
                        </div>
                        <div className={styles.box}>
                            <p>단체교섭 지원</p>
                            <p>
                                대내, 외 노사 환경 및 노동조합 요구안 분석<br />
                                단체교섭 체결 전략 수립 및 쟁의 행위 시 대안 검토<br />
                                기타 단체교섭 체결 과정 지원
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.sec3, commonStyles.flexCenter)}>
                <div className={commonStyles.layout}>
                    <p className={styles.title}>IR 컨설팅 서비스의 <span>기대효과</span></p>
                    <div className={styles.box}>
                        <img src={img} alt='' />
                        <ul>
                            <li>① 노사 관계 <span>안정화</span></li>
                            <li>② <span>협력적</span> 노사 관계 및 <span>합리적</span> 노사 관행 구축</li>
                            <li>③ 근로자들의 <span>생산성 향상</span></li>
                            <li>④ 대외적 <span>기업 이미지 제고</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IR