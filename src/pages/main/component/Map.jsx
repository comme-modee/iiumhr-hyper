import React from 'react'
import styles from '../style/Map.module.css'

const Map = () => {
    return (
        <div className={styles.mapContainer}>
            <div className={styles.map}>

            </div>
            <div className={styles.info}>
                <div>
                    <div className={styles.icon}></div>
                    <p>찾아오시는 길 : 3호선 정발산역 1번출구 도보 5분 거리</p>
                </div>
                <div>
                    <div className={styles.icon}></div>
                    <p>전화번호 : 031-966-7674~5｜팩스번호 : 031-688-8983</p>
                </div>
                <div>
                    <div className={styles.icon}></div>
                    <p>
                        회사주소 : (10403) 경기도 고양시 일산동구 정발산로 24,<br />
                        3동 512호, 513호 (장항동, 웨스턴타워)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Map